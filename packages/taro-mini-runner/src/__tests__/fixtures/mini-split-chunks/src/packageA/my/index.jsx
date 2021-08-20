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

import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import consoleLogMain from '../../utils/consoleLogMain'
import consoleLogSubVendors from '../../utils/consoleLogSubVendors'
import consoleLogSubCommon from '../../utils/consoleLogSubCommon'
import testExcludeString from '../../utils/testExcludeString'
import testExcludeFunction from '../../utils/testExcludeFunction'
import '../../css/sub-vendors.css'
import vendorsStyles from '../../css/sub-vendors.module.css'

export default class My extends Component {
  componentDidMount () {
    consoleLogMain()
    consoleLogSubVendors()
    consoleLogSubCommon('packageA')
    testExcludeString()
    testExcludeFunction()
  }

  render () {
    return (
      <View 
        className={`
          sub-vendors
          ${vendorsStyles['sub-vendors-module']}
        `}
        >
        <Text>I m my</Text>
      </View>
    )
  }
}
