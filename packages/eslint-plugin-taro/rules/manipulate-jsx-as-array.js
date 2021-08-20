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

const { buildDocsMeta } = require('../utils/utils')

const ERROR_MESSAGE = '不能使用 Array#map 之外的方法操作 JSX 数组'

// eslint-disable-next-line
const DEFAULT_Components_SET = new Set([
  'View',
  'ScrollView',
  'Swiper',
  'MovableView',
  'CoverView',
  'Icon',
  'Text',
  'RichText',
  'Progress',
  'Button',
  'Checkbox',
  'Form',
  'Input',
  'Label',
  'Picker',
  'PickerView',
  'Radio',
  'RadioGroup',
  'CheckboxGroup',
  'Slider',
  'Switch',
  'Textarea',
  'Navigator',
  'Audio',
  'Image',
  'Video',
  'Camera',
  'LivePlayer',
  'LivePusher',
  'Map',
  'Canvas',
  'OpenData',
  'WebView',
  'SwiperItem'
])
// 可以传值的数组方法
const ARRAY_METHODS_EXCEPT_MAP = new Set([
  'concat',
  'copyWithin',
  'every',
  'fill',
  'filter',
  'find',
  'findIndex',
  'flatMap',
  'forEach',
  'pop',
  'push',
  'reduce',
  'reduceRight',
  'some',
  'shift',
  'unshift'
])

module.exports = {
  meta: {
    docs: buildDocsMeta(ERROR_MESSAGE, 'manipulate-jsx-as-array')
  },

  create (context) {
    return {
      JSXElement (node) {
        const parents = context.getAncestors(node)
        const callExpression = parents.find(p => p.type === 'CallExpression' && p.callee.type === 'MemberExpression')
        if (callExpression && ARRAY_METHODS_EXCEPT_MAP.has(callExpression.callee.property.name)) {
          context.report({
            message: ERROR_MESSAGE,
            node: callExpression
          })
        }
      }
    }
  }
}
