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

import React from 'react'

export type OnChangeEvent<T, E> = { detail: { value: T } & E }
export interface PickerViewProps<T, E = Record<string, unknown>> {
  children?: React.ReactNode;
  mode?: 'selector' | 'multiSelector' | 'time' | 'date' | 'region';
  value?: number[];
  onChange?: (event: OnChangeEvent<T, E>) => void;
  onCancel?: () => void;
  disabled?: boolean;
  itemStyle?: Record<string, unknown>;
  indicatorStyle?: Record<string, unknown>;
}
