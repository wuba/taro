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

import { StyleProp, ViewStyle } from 'react-native'

export type EventOnChange = {
  value: any;
  checked: boolean;
}

export type EventGroupOnChange = {
  detail: {
    value: any;
  };
}

export interface RadioGroupState {
  checkedValue?: string;
}

export interface RadioGroupProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onChange?: (evt: EventGroupOnChange) => void;
  _onGroupDataInitial?: (value: any) => void;
}
