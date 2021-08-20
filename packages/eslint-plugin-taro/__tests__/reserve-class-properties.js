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

const rule = require('../rules/reserve-class-properties')
const { RuleTester } = require('eslint')
const { parserOptions, testComponent } = require('../utils/utils')

const ruleTester = new RuleTester({ parserOptions, parser: 'babel-eslint' })

const ERROR_MESSAGE = ''

function testInvalid (message, tests) {
  return tests.map(code => ({
    code,
    errors: [{ message }]
  }))
}

ruleTester.run('no-stateless-component', rule, {
  valid: [{
    code: testComponent('<View />')
  }, {
    code: testComponent('<View>test</View>')
  }, {
    code: testComponent('<ScrollView>test</ScrollView>')
  }, {
    code: testComponent('<View>{\'test\'}</View>')
  }, {
    code: testComponent(`<View>
      <CustomComponent />
    </View>`)
  }, {
    code: `
    const array = ['test1', 'test2', 'test3'];
    const element = array.map(item => <View>{item}</View>)
    `
  }, {
    code: `
    const array = ['test1', 'test2', 'test3'];
    const element = array.map(item => {
      return <View>{item}</View>
    })
    `
  }, {
    code: `
    const array = ['test1', 'test2', 'test3'];
    const element = array.map(item => {
      return <View>{item}</View>
    })
    `
  }, {
    code: `
    const array = ['test1', 'test2', 'test3'];
    const element = this.state.array.map(item => {
      return <View>{item}</View>
    })
    `
  }],
  invalid: testInvalid(ERROR_MESSAGE, [
    'class A extends Component { _initData () {} }',
    'class A extends Component { $data = []; initData () {} }'
  ])
})
