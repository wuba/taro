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

import { ComponentType } from 'react'
import { StandardProps, CommonEventFunction } from './common'

interface OpenDataProps extends StandardProps {
  /** 开放数据类型
   * @supported weapp
   */
  type: keyof OpenDataProps.type
  /** 当 type="groupName" 时生效, 群id
   * @supported weapp
   */
  openGid?: string
  /** 当 type="user*" 时生效，以哪种语言展示 userInfo
   * @default "en"
   * @supported weapp
   */
  lang?: keyof OpenDataProps.lang

  /** 数据为空时的默认文案
   * @supported weapp
   */
  defaultText?: string

  /** 用户头像为空时的默认图片，支持相对路径和网络图片路径
   * @supported weapp
   */
  defaultAvatar?: string

  /** 群名称或用户信息为空时触发
   * @supported weapp
   */
  onError?: CommonEventFunction
}

declare namespace OpenDataProps {
  /** type 的合法值 */
  interface type {
    /** 拉取群名称 */
    groupName
    /** 用户昵称 */
    userNickName
    /** 用户头像 */
    userAvatarUrl
    /** 用户性别 */
    userGender
    /** 用户所在城市 */
    userCity
    /** 用户所在省份 */
    userProvince
    /** 用户所在国家 */
    userCountry
    /** 用户的语言 */
    userLanguage
  }
  /** lang 的合法值 */
  interface lang {
    /** 英文 */
    en
    /** 简体中文 */
    zh_CN
    /** 繁体中文 */
    zh_TW
  }
}

/** 用于展示微信开放的数据
 * @classification open
 * @supported weapp
 * @example
 * ```tsx
 * class App extends Component {
 *   render () {
 *     return (
 *       <OpenData type='userAvatarUrl'/>
 *     )
 *   }
 * }
 * ```
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html
 */
declare const OpenData: ComponentType<OpenDataProps>

export { OpenData, OpenDataProps }
