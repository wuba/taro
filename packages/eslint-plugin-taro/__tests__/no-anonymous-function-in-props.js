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

const rule = require('../rules/no-anonymous-function-in-props')
const { RuleTester } = require('eslint')
const { parserOptions, testValid, testInvalid } = require('../utils/utils')

const ruleTester = new RuleTester({ parserOptions })

const ERROR_MESSAGE = '不能在 JSX 参数中使用匿名函数'

ruleTester.run('no-anonymous-function-in-props', rule, {
  valid: testValid([
    '<View onClick={this.hanldeClick} />',
    '<View onClick={this.props.hanldeClick} />',
    '<View onClick={this.hanldeClick.bind(this)} />',
    '<View onClick={this.props.hanldeClick.bind(this)} />',
    '<View onClick={this.hanldeClick(id)} />',
    '<View onClick={this.hanldeClick(id)()} />',
    '<View ref={(e) => this.handleClick(e)} />'
  ]),
  invalid: testInvalid(ERROR_MESSAGE, [
    '<View onClick={() => this.handleClick()} />',
    '<View onClick={(e) => this.handleClick(e)} />',
    '<View onClick={() => ({})} />',
    '<View onClick={function () {}} />',
    '<View onClick={function (e) {this.handleClick(e)}} />'
  ])
})
