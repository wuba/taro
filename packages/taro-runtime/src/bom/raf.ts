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

// https://github.com/myrne/performance-now
export let now

(function () {
  let loadTime
  if ((typeof performance !== 'undefined' && performance !== null) && performance.now) {
    now = function () {
      return performance.now()
    }
  } else if (Date.now) {
    now = function () {
      return Date.now() - loadTime
    }
    loadTime = Date.now()
  } else {
    now = function () {
      return new Date().getTime() - loadTime
    }
    loadTime = new Date().getTime()
  }
})()

let lastTime = 0

// https://gist.github.com/paulirish/1579671
// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0
let raf = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null ? requestAnimationFrame : function (callback) {
  const _now = now()
  const nextTime = Math.max(lastTime + 16, _now) // First time will execute it immediately but barely noticeable and performance is gained.
  return setTimeout(function () { callback(lastTime = nextTime) }, nextTime - _now)
}

let caf = typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null ? cancelAnimationFrame : clearTimeout

if (typeof global !== 'undefined') {
  raf = raf.bind(global)
  caf = caf.bind(global)
}

export {
  raf,
  caf
}
