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
import { StandardProps } from '@tarojs/components'

interface PageContainerProps extends StandardProps {
  /**
   * @description 是否显示容器组件
   * @default false
   */
  show?: boolean

  /**
   * @description 动画时长，单位毫秒
   * @default 300
   */
  duration?: number


  /**
   * @description z-index 层级
   * @default 300
   */
  zIndex?: number

  /**
   * @description 是否显示遮罩层
   * @default true
   */
  overlay?: boolean

  /**
   * @description 弹出位置，可选值为 top bottom right center
   * @default 'bottom'
   */
  position?: PageContainerProps.position

  /**
   * @description 是否显示圆角
   * @default false
   */
  round?: boolean

  /**
   * @description 是否在下滑一段距离后关闭
   * @default false
   */
  closeOnSlideDown?: boolean

  /** @description  自定义遮罩层样式 */
  overlayStyle?: string


  /** @description  自定义弹出层样式 */
  customStyle?: string

  /** @description 进入前触发 */
  onBeforeEnter?: () => void
  /** @description 进入中触发 */
  onEnter?: () => void
  /** @description 进入后触发 */
  onAfterEnter?: () => void
  /** @description 离开前触发 */
  onBeforeLeave?: () => void
  /** @description 离开中触发 */
  onLeave?: () => void
  /** @description 离开后触发 */
  onAfterLeave?: () => void
  /** @description 点击遮罩层时触发 */
  onClickOverlay?: () => void
}

declare namespace PageContainerProps {
  type position = 'top' | 'bottom' | 'right' | 'center'
}

declare module '@tarojs/components' {
  /** 页面容器
   * @classification PageContainer
   * @supported weapp
   * @see https://developers.weixin.qq.com/miniprogram/dev/component/page-container.html
   */
  export const PageContainer: ComponentType<PageContainerProps>
}
