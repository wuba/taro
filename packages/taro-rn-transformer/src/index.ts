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

import * as path from 'path'
import appLoader, { getAppPages } from './app'
import componentLoader from './page'
import { TransformType, globalAny } from './types/index'
import { isPageFile, getCommonStyle, isSourceComponent, isNPMComponent } from './utils'

// eslint-disable-next-line import/no-commonjs
module.exports.transform = function ({ src, filename, options }: TransformType) {
  let code = src
  const sourceDir = options?.sourceRoot || 'src'
  const entryName = options?.entry || 'app'
  const appPath = path.join(options.projectRoot, sourceDir, entryName)
  const basePath = path.join(options.projectRoot, sourceDir)
  // metro 起了多个 worker，内存不共享，每个 worker 需要去解析数据存在内存里面，内存有则不解析
  globalAny.__taroCommonStyle = globalAny.__taroCommonStyle || getCommonStyle(appPath, basePath)
  if (!globalAny.__taroAppPages) {
    const pages = getAppPages(appPath)
    globalAny.__taroAppPages = pages.map(item => sourceDir + item)
  }

  if (options.isEntryFile(filename)) {
    code = appLoader({
      filename: filename,
      projectRoot: options.projectRoot,
      sourceDir: sourceDir,
      appName: options.appName || 'taroDemo',
      entryName: entryName,
      designWidth: options?.designWidth || 750,
      deviceRatio: options?.deviceRatio || {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2
      }
    })
  } else if (isPageFile(filename, sourceDir) || isSourceComponent(filename, code, sourceDir) || isNPMComponent(filename, code, options?.rn)) {
    code = componentLoader({
      projectRoot: options.projectRoot,
      sourceCode: src,
      sourceDir: sourceDir,
      filename
    })
  }

  return options.nextTransformer({
    src: code,
    filename: filename,
    options: options
  })
}
