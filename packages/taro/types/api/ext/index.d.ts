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

/**
 *
 * Based on original code from: https://github.com/qiu8310/minapp/blob/master/packages/minapp-wx/typing/wx.d.ts
 * Lincenced under MIT license: https://github.com/qiu8310/minapp/issues/69
 *
 */
declare namespace Taro {
  namespace getExtConfigSync {
    interface ExtInfo {
      /** 第三方平台自定义的数据 */
      extConfig: General.IAnyObject
    }
  }

  /** Taro.getExtConfig 的同步版本。
   *
   * **Tips**
   * 1. 本接口暂时无法通过 Taro.canIUse 判断是否兼容，开发者需要自行判断 Taro.getExtConfigSync 是否存在来兼容
   * @supported weapp
   * @example
   * ```tsx
   * let extConfig = Taro.getExtConfigSync? Taro.getExtConfigSync(): {}
   *
   * console.log(extConfig)
   * ```
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfigSync.html
   */
  function getExtConfigSync(): General.IAnyObject

  namespace getExtConfig {
    interface Option {
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: General.CallbackResult) => void
      /** 接口调用失败的回调函数 */
      fail?: (res: General.CallbackResult) => void
      /** 接口调用成功的回调函数 */
      success?: (result: SuccessCallbackResult) => void
    }

    interface SuccessCallbackResult extends General.CallbackResult {
      /** 第三方平台自定义的数据 */
      extConfig: General.IAnyObject
      /** 调用结果 */
      errMsg: string
    }
  }
  /** 获取[第三方平台](https://developers.weixin.qq.com/miniprogram/dev/devtools/ext.html)自定义的数据字段。
    *
    * **Tips**
    * 1. 本接口暂时无法通过 Taro.canIUse 判断是否兼容，开发者需要自行判断 Taro.getExtConfig 是否存在来兼容
   * @supported weapp
   * @example
   * ```tsx
   * if(Taro.getExtConfig) {
   *   Taro.getExtConfig({
   *     success: function (res) {
   *       console.log(res.extConfig)
   *     }
   *   })
   * }
   * ```
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfig.html
   */
  function getExtConfig(option?: getExtConfig.Option): Promise<getExtConfig.SuccessCallbackResult>
}
