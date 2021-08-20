/*
* Licensed to the O2Team under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

const reactNativeBabelPreset = require('metro-react-native-babel-preset')
const { merge } = require('lodash')
const fs = require('fs')
/**
 *
 * 获取项目级配置
 *
 */
let config
let rnConfig
function getProjectConfig () {
  if (config) return config
  const fileName = `${process.cwd()}/config/index.js`
  if (fs.existsSync(fileName)) {
    config = require(`${process.cwd()}/config/index`)(merge)
    return config
  } else {
    console.warn('缺少项目基本配置')
    config = {}
    return config
  }
}

function getRNConfig () {
  const config = getProjectConfig()
  if (rnConfig) return rnConfig
  if (config.rn) {
    rnConfig = config.rn
  } else {
    rnConfig = {}
  }
  return rnConfig
}

/**
 * 配置环境变量
 */
function getEnv () {
  const config = getProjectConfig()
  const envConst = {
    'process.env.TARO_ENV': 'rn'
  }
  if (config.env) {
    Object.keys(config.env).forEach((key) => {
      try {
        envConst[`process.env.${key}`] = JSON.parse(config.env[key])
      } catch (e) {
        console.error('env环境配置有误' + config.env[key])
      }
    })
  }
  if (!config.env || !config.env.NODE_ENV) {
    if (config.isWatch) {
      envConst['process.env.NODE_ENV'] = 'development'
    } else {
      envConst['process.env.NODE_ENV'] = 'production'
    }
  }
  return envConst
}

function parseDefineConst (config) {
  Object.keys(config.defineConstants).forEach((key) => {
    try {
      config.defineConstants[key] = JSON.parse(config.defineConstants[key])
    } catch (e) {
      console.error('defineConstants环境配置有误')
      config.defineConstants[key] = ''
    }
  })
}

/**
 * 配置常量
 * @returns {*}
 */
function getDefineConstants () {
  const config = getProjectConfig()
  const rnconfig = getRNConfig()
  if (rnconfig.defineConstants) {
    parseDefineConst(rnconfig)
    rnconfig.defineConstants = Object.assign(rnconfig.defineConstants, getEnv())
    return rnconfig.defineConstants
  }
  if (config.defineConstants) {
    parseDefineConst(config)
    config.defineConstants = Object.assign(config.defineConstants, getEnv())
    return config.defineConstants
  }
  return getEnv()
}

function getCSSModule () {
  const rnconfig = getRNConfig()
  if (rnconfig.postcss && rnconfig.postcss.cssModules) {
    return rnconfig.postcss.cssModules.enable
  }
  return false
}

module.exports = (_, options = {}) => {
  const {
    decoratorsBeforeExport,
    decoratorsLegacy
  } = options
  if (options.framework && options.framework !== 'react') {
    throw new Error(`Value "${options.framework}" of option "framework" is not supported for React-Native`)
  }

  // taro-rn api/lib 支持按需引入
  const nativeApis = require('@tarojs/taro-rn/apiList.js')
  const nativeLibs = require('@tarojs/taro-rn/libList.js')
  const nativeInterfaces = nativeApis.concat(nativeLibs)

  getEnv()
  const defineConstants = getDefineConstants()
  const presets = []
  const plugins = []
  const { enableMultipleClassName = false, enableMergeStyle = false } = getRNConfig()

  presets.push(reactNativeBabelPreset(_, options))
  plugins.push(
    // React 17 jsx runtime 兼容
    [require('@babel/plugin-transform-react-jsx'), {
      runtime: options.reactJsxRuntime || 'automatic'
    }],
    [require('babel-plugin-transform-react-jsx-to-rn-stylesheet'), { enableCSSModule: getCSSModule(), enableMultipleClassName }]
  )
  if (enableMergeStyle) {
    plugins.push([require('babel-plugin-jsx-attributes-array-to-object'), { attributes: ['style'] }])
  }
  plugins.push(
    [require('babel-plugin-transform-imports-api').default, {
      packagesApis: new Map([
        ['@tarojs/taro', new Set(nativeInterfaces)],
        ['@tarojs/taro-rn', new Set(nativeInterfaces)]
      ]),
      usePackgesImport: true, // Whether to use packagesImport
      packagesImport: {
        '^@tarojs/components(-rn)?$': {
          transform: '@tarojs/components-rn/dist/components/${member}'
        },
        '^@tarojs/taro(-rn)?$': {
          transform: (importName) => {
            if (nativeLibs.includes(importName)) {
              return `@tarojs/taro-rn/dist/lib/${importName}`
            } else {
              return '@tarojs/taro-rn/dist/api'
            }
          },
          skipDefaultConversion: true
        }
      }
    }],
    [require('babel-plugin-global-define'), defineConstants]
  )

  // 添加一个默认 plugin, 与小程序/h5保持一致. todo: 3.1后采用拓展的方式
  plugins.push(
    [require('@babel/plugin-proposal-decorators'), {
      decoratorsBeforeExport,
      legacy: decoratorsLegacy !== false
    }]
  )
  return {
    presets,
    plugins
  }
}
