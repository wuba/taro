/*
 * @Author: iChengbo
 * @Date: 2021-07-19 14:37:08
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-28 17:34:38
 * @FilePath: /taro-react-native/src/app.ts
 */
import { Component } from 'react'
import SplashScreen from 'react-native-splash-screen'
import * as Sentry from "@sentry/react-native";

import './app.scss'

Sentry.init({
  dsn: "https://bfb6d9d53e4c4374a192fca5a605f45a@o738924.ingest.sentry.io/5785609",
});

class App extends Component {

  componentDidMount () {
    SplashScreen.hide();
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}
export default App
