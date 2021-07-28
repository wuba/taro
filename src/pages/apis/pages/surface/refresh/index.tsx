/*
 * @Author: iChengbo
 * @Date: 2021-07-28 11:56:08
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-28 14:52:49
 * @FilePath: /taro-react-native/src/pages/apis/pages/surface/refresh/index.tsx
 */
import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import './index.scss';

export default class PageView extends Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            list: [1, 2, 3],
        }
    }
    timer;

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillUnmount() {
        this.setState = () => {}
        clearTimeout?.(this.timer)
    }

    onPullDownRefresh() {
        console.log('onPullDownRefresh')
    }

    _startPullDownRefresh = () => {
        Taro.startPullDownRefresh();
        this.timer = setTimeout(() => {
            this.setState({
                list: [7, 8, 9]
            }, () => {
                Taro.stopPullDownRefresh();
                clearTimeout?.(this.timer)
            })
        }, 2000);
    }

    render() {
        const { list = [] } = this.state;
        return (
            <View className='components-page' style={{ height: 1000 }}>
                <View className='components-page__body' style={{ marginTop: 200 }}>
                    {list.map((item) => {
                        return (
                            <View key={item}>
                                <Text>{item}</Text>
                            </View>
                        )
                    })}
                    <Button type="primary" onClick={this._startPullDownRefresh}>触发下拉刷新</Button>
                </View>
            </View>
        )
    }
}
