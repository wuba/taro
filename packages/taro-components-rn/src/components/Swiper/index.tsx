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
 * 注意事项：
 *   Swiper 不能加 `flex: 1`
 *
 * ✔ indicatorDots(indicator-dots)
 * ✔ indicatorColor(indicator-color)
 * ✔ indicatorActiveColor(indicator-active-color)
 * ✔ autoplay
 * ✔ current
 * ✘ currentItemId(current-item-id)
 * ✔ interval
 * ✘ duration
 * ✔ circular
 * ✔ vertical
 * ✘ previousMargin(previous-margin)
 * ✘ nextMargin(next-margin)
 * ✘ displayMultipleItems(display-multiple-items)
 * ✘ skipHiddenItem-layout(skip-hidden-item-layout)
 * ✔ onChange(bindchange): No support for detail.source
 * ✔ onAnimationFinish(bindanimationfinish): No support for detail.source
 *
 * @warn vertical swiper nested in scrollview on android would not work.
 *
 * @example
 * <Swiper
 *   indicatorDots={true}
 *   indicatorColor="white"
 *   indicatorActiveColor="purple"
 *   autoplay={false}
 *   current={1}
 *   interval={6000}
 *   circular={false}
 *   vertical={true}
 *   onChange={() => null}
 *   onAnimationFinish={() => null}
 *   style={{ backgroundColor: 'black' }}
 * >
 *   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
 *     <Text style={styles.text}>Hello Swiper</Text>
 *   </View>
 *   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
 *     <Text style={styles.text}>Beautiful</Text>
 *   </View>
 *   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }}>
 *     <Text style={styles.text}>And simple</Text>
 *   </View>
 * </Swiper>
 */

import * as React from 'react'
import {
  StyleSheet,
} from 'react-native'
import { noop } from '../../utils'
import { SwiperProps } from './PropsType'
import Carousel from './carousel'

class _Swiper extends React.Component<SwiperProps> {
  static defaultProps = {
    indicatorColor: 'rgba(0,0,0,0.3)',
    indicatorActiveColor: '#000',
    current: 0,
    interval: 5000,
  }

  onIndexChanged = (index: number): void => {
    const { onChange = noop, onAnimationFinish = noop } = this.props
    onChange({ detail: { current: index } })
    onAnimationFinish({ detail: { current: index } })
  }

  render(): any {
    const {
      children,
      style,
      indicatorDots,
      indicatorColor,
      indicatorActiveColor,
      autoplay,
      current,
      interval,
      circular,
      vertical,
    } = this.props

    return (
      <Carousel
        style={StyleSheet.flatten(style)}
        dots={Boolean(indicatorDots)}
        dotStyle={{ backgroundColor: indicatorColor }}
        dotActiveStyle={{ backgroundColor: indicatorActiveColor }}
        autoplay={Boolean(autoplay)}
        selectedIndex={current}
        autoplayInterval={interval}
        infinite={Boolean(circular)}
        vertical={Boolean(vertical)}
        afterChange={this.onIndexChanged}
      >
        {children}
      </Carousel>
    )
  }
}

export default _Swiper
