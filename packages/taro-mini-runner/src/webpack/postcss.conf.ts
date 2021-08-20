/*!
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

import * as path from 'path'

import * as autoprefixer from 'autoprefixer'
import * as pxtransform from 'postcss-pxtransform'
import * as htmlTransform from 'postcss-html-transform'
import { sync as resolveSync } from 'resolve'
import * as url from 'postcss-url'
import { IPostcssOption } from '@tarojs/taro/types/compile'
import { isNpmPkg, recursiveMerge } from '@tarojs/helper'

const defaultAutoprefixerOption = {
  enable: true,
  config: {
    flexbox: 'no-2009'
  }
}
const defaultPxtransformOption: {
  [key: string]: any
} = {
  enable: true,
  config: {
    platform: 'weapp'
  }
}

const defaultUrlOption: {
  [key: string]: any
} = {
  enable: true,
  config: {
    limit: 1000,
    url: 'inline'
  }
}

const optionsWithDefaults = ['autoprefixer', 'pxtransform', 'cssModules', 'url', 'htmltransform']

const plugins = [] as any[]

export const getPostcssPlugins = function (appPath: string, {
  isBuildQuickapp = false,
  designWidth,
  deviceRatio,
  postcssOption = {} as IPostcssOption
}) {
  if (designWidth) {
    defaultPxtransformOption.config.designWidth = designWidth
  }

  if (deviceRatio) {
    defaultPxtransformOption.config.deviceRatio = deviceRatio
  }

  const autoprefixerOption = recursiveMerge({}, defaultAutoprefixerOption, postcssOption.autoprefixer)
  const pxtransformOption = recursiveMerge({}, defaultPxtransformOption, postcssOption.pxtransform)
  const urlOption = recursiveMerge({}, defaultUrlOption, postcssOption.url)
  if (autoprefixerOption.enable) {
    plugins.push(autoprefixer(autoprefixerOption.config))
  }

  if (pxtransformOption.enable && !isBuildQuickapp) {
    plugins.push(pxtransform(pxtransformOption.config))
  }
  if (urlOption.enable) {
    plugins.push(url(urlOption.config))
  }
  if (postcssOption.htmltransform?.enable) {
    plugins.push(htmlTransform(postcssOption.htmltransform.config))
  }
  plugins.unshift(require('postcss-import'))
  Object.entries(postcssOption).forEach(([pluginName, pluginOption]) => {
    if (optionsWithDefaults.indexOf(pluginName) > -1) return
    if (!pluginOption || !pluginOption.enable) return

    if (!isNpmPkg(pluginName)) { // local plugin
      pluginName = path.join(appPath, pluginName)
    }

    try {
      const pluginPath = resolveSync(pluginName, { basedir: appPath })
      plugins.push(require(pluginPath)(pluginOption.config || {}))
    } catch (e) {
      const msg = e.code === 'MODULE_NOT_FOUND' ? `缺少postcss插件${pluginName}, 已忽略` : e
      console.log(msg)
    }
  })

  return plugins
}
