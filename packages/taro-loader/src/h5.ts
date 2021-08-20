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

import * as webpack from 'webpack'
import { getOptions, stringifyRequest } from 'loader-utils'
import { AppConfig } from '@tarojs/taro'
import { join, dirname } from 'path'
import { frameworkMeta } from './utils'

function genResource (path: string, pages: Map<string, string>, loaderContext: webpack.loader.LoaderContext) {
  const stringify = (s: string): string => stringifyRequest(loaderContext, s)
  return `
  Object.assign({
      path: '${path}',
      load: function() {
          return import(${stringify(join(loaderContext.context, path))})
      }
  }, require(${stringify(pages.get(path)!)}).default || {}),
`
}

export default function (this: webpack.loader.LoaderContext) {
  const options = getOptions(this)
  const stringify = (s: string): string => stringifyRequest(this, s)
  const {
    importFrameworkStatement,
    frameworkArgs,
    creator,
    importFrameworkName,
    extraImportForWeb,
    execBeforeCreateWebApp,
    compatComponentImport,
    compatComponentExtra
  } = frameworkMeta[options.framework]
  const config: AppConfig = options.config
  const pages: Map<string, string> = options.pages
  const pxTransformConfig = options.pxTransformConfig
  let tabBarCode = `var tabbarIconPath = []
var tabbarSelectedIconPath = []
`
  if (config.tabBar) {
    const tabbarList = config.tabBar.list
    for (let i = 0; i < tabbarList.length; i++) {
      const t = tabbarList[i]
      if (t.iconPath) {
        const iconPath = stringify(join(dirname(this.resourcePath), t.iconPath))
        tabBarCode += `tabbarIconPath[${i}] = typeof require(${iconPath}) === 'object' ? require(${iconPath}).default : require(${iconPath})\n`
      }
      if (t.selectedIconPath) {
        const iconPath = stringify(join(dirname(this.resourcePath), t.selectedIconPath))
        tabBarCode += `tabbarSelectedIconPath[${i}] = typeof require(${iconPath}) === 'object' ? require(${iconPath}).default : require(${iconPath})\n`
      }
    }
  }

  const webComponents = `
import { defineCustomElements, applyPolyfills } from '@tarojs/components/loader'
import '@tarojs/components/dist/taro-components/taro-components.css'
${extraImportForWeb || ''}
applyPolyfills().then(function () {
  defineCustomElements(window)
})
`

  const components = options.useHtmlComponents ? compatComponentImport || '' : webComponents

  const code = `import { createRouter, initPxTransform } from '@tarojs/taro'
import component from ${stringify(join(dirname(this.resourcePath), options.filename))}
import { ${creator}, window } from '@tarojs/runtime'
${importFrameworkStatement}
${components}
var config = ${JSON.stringify(config)}
window.__taroAppConfig = config
${config.tabBar ? tabBarCode : ''}
if (config.tabBar) {
  var tabbarList = config.tabBar.list
  for (var i = 0; i < tabbarList.length; i++) {
    var t = tabbarList[i]
    if (t.iconPath) {
      t.iconPath = tabbarIconPath[i]
    }
    if (t.selectedIconPath) {
      t.selectedIconPath = tabbarSelectedIconPath[i]
    }
  }
}
config.routes = [
  ${config.pages?.map(path => genResource(path, pages, this)).join('')}
]
${options.useHtmlComponents ? compatComponentExtra : ''}
${execBeforeCreateWebApp || ''}
var inst = ${creator}(component, ${frameworkArgs})
createRouter(inst, config, ${importFrameworkName})
initPxTransform({
  designWidth: ${pxTransformConfig.designWidth},
  deviceRatio: ${JSON.stringify(pxTransformConfig.deviceRatio)}
})
`

  return code
}
