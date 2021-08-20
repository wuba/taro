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
 * ✔ percent
 * ✔ showInfo(show-info)
 * ✔ strokeWidth(stroke-width)
 * - color
 * ✔ activeColor
 * ✔ backgroundColor
 * ✔ active
 * ✔ activeMode(active-mode)
 *
 * @warn Height and width accept percentages after 0.42
 *
 * @example
 *  <Progress
 *    percent={this.state.progressPercent}
 *    showInfo={true}
 *    activeColor="orange"
 *    backgroundColor="pink"
 *    active={true}
 *    activeMode="forwards"
 *    style={{ marginTop: 10 }}
 *  />
 */

import * as React from 'react'
import {
  View,
  Text,
  Animated,
  Easing,
} from 'react-native'
import styles from './styles'
import { ProgressProps, ProgressState } from './PropsType'

class _Progress extends React.Component<ProgressProps, ProgressState> {
  static defaultProps = {
    percent: 0,
    strokeWidth: 6,
    activeColor: '#09BB07',
    backgroundColor: '#EBEBEB',
    activeMode: 'backwards',
    borderRadius: 0,
  }

  static getDerivedStateFromProps (props: ProgressProps, state: ProgressState): ProgressState| null {
    // eslint-disable-next-line multiline-ternary
    return props.percent !== state.percent ? {
      percent: props.percent,
      prevPercent: state.percent,
      valve: state.valve
    } : null
  }

  state: ProgressState = {
    percent: 0,
    prevPercent: 0,
    valve: new Animated.Value(0)
  }

  animate = (): void => {
    const { active, activeMode } = this.props
    const { percent, prevPercent, valve } = this.state
    const toValve = percent / 100

    if (!active || (activeMode !== 'backwards' && activeMode !== 'forwards')) {
      Animated.timing(valve, {
        toValue: toValve,
        duration: 0,
        useNativeDriver: false
      }).start()
      return
    }

    const sequence: Animated.CompositeAnimation[] = []
    const duration = (activeMode === 'forwards' ? Math.abs(percent - prevPercent) : percent) / 100 * 1000

    if (activeMode === 'backwards') {
      sequence.push(Animated.timing(valve, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false
      }))
    }
    sequence.push(Animated.timing(valve, {
      toValue: toValve,
      easing: Easing.linear,
      duration,
      useNativeDriver: false
    }))

    Animated.sequence(sequence).start()
  }

  componentDidMount (): void {
    this.animate()
  }

  getSnapshotBeforeUpdate (prevProps: ProgressProps, prevState: ProgressState): boolean {
    return prevState.percent !== this.state.percent
  }

  componentDidUpdate (prevProps: ProgressProps, prevState: ProgressState, snapshot: boolean): void {
    if (snapshot) {
      this.animate()
    }
  }

  render (): JSX.Element {
    const {
      style,
      percent,
      showInfo,
      borderRadius,
      strokeWidth,
      activeColor,
      backgroundColor,
    } = this.props

    const width = this.state.valve.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%']
    })

    return (
      <View style={[styles.wrapper, style]}>
        <View
          style={[
            styles.bar, {
              height: strokeWidth,
              backgroundColor
            }
          ]}
        >
          <Animated.View style={[
            styles.barThumb, {
              width,
              height: '100%',
              backgroundColor: activeColor,
              borderBottomRightRadius: Number(borderRadius),
              borderTopRightRadius: Number(borderRadius),
            }
          ]} />
        </View>
        {showInfo && <Text style={styles.info}>{percent}%</Text>}
      </View>
    )
  }
}

export default _Progress
