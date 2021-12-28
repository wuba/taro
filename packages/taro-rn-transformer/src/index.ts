import * as path from 'path'
import * as fs from 'fs'
import appLoader, { getAppPages } from './app'
import { printLog, processTypeEnum } from '@tarojs/helper'
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
  let loaded = ''
  let fileType = ''

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
    loaded = 'index.tsx'
    fileType = '入口文件'
  } else if (isPageFile(filename, sourceDir) || isSourceComponent(filename, code, sourceDir) || isNPMComponent(filename, code, options?.rn)) {
    code = componentLoader({
      projectRoot: options.projectRoot,
      sourceCode: src,
      sourceDir: sourceDir,
      filename
    })
    loaded = filename
    fileType = '页面文件'
  } else if (!filename.startsWith('node_modules')) {
    loaded = filename
    if (filename.endsWith('.config.ts') || filename.endsWith('.config.js')) {
      fileType = '页面配置'
    } else {
      fileType = '其他文件'
    }
  }
  const { enable = false, outputRoot = 'rn_temp' } = options.rn?.temp || {}
  if (enable && loaded) {
    const file = path.join(outputRoot, loaded)
    fs.mkdir(path.dirname(file), { recursive: true }, () => {
      fs.writeFile(file, code, 'utf8', () => {
        printLog(processTypeEnum.GENERATE, fileType, loaded)
      })
    })
  }

  return options.nextTransformer({
    src: code,
    filename: filename,
    options: options
  })
}
