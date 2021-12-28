import * as path from 'path'
import * as fs from 'fs'
import { printLog, processTypeEnum } from '@tarojs/helper'

const METROCONFIG = `
const Supporter = require('@tarojs/rn-supporter')
const supporter = new Supporter()
module.exports = {
  resolver: supporter.getResolver()
}
`

const BABELCONFIG = `
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }]
  ]
}
`

function writeFile (filename: string, content: string, type: string, options: any): void {
  const { outputRoot = 'rn_temp' } = options.temp || {}
  const file = path.join(outputRoot, filename)
  fs.mkdir(path.dirname(file), { recursive: true }, () => {
    fs.writeFile(file, content, 'utf8', () => {
      printLog(processTypeEnum.GENERATE, type, file)
    })
  })
}

export default function (options: any): void {
  const {
    outputRoot = 'rn_temp',
    enable = false,
    generateMetroConfig = true,
    generateBabelConfig = true,
    copyFiles = ['package.json']
  } = options.temp || {}
  if (enable) {
    if (generateMetroConfig) {
      writeFile('metro.config.js', METROCONFIG, 'metro 配置文件', options)
    }
    if (generateBabelConfig) {
      writeFile('babel.config.js', BABELCONFIG, 'babel 配置文件', options)
    }
    if (copyFiles && copyFiles.length) {
      for (const file of copyFiles) {
        const distFile = path.join(outputRoot, file)
        fs.mkdir(path.dirname(distFile), { recursive: true }, () => {
          fs.copyFile(file, distFile, err => {
            if (err) console.log(err)
            printLog(processTypeEnum.GENERATE, '其他文件', distFile)
          })
        })
      }
    }
  }
}
