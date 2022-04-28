/**
 * ✔ selectable
 * ✘ space
 * ✘ decode: Fixed value TRUE
 */

import * as React from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'
import { TextProps } from './PropsType'
import { defaultTextStyle } from '../../utils'

const _Text: React.FC<TextProps> = ({
  style,
  children,
  selectable,
  onClick,
  ...otherProps
}: TextProps) => {
  return (
    <Text
      selectable={!!selectable}
      style={StyleSheet.compose(defaultTextStyle, style)}
      onPress={onClick}
      {...otherProps}
    >
      {children}
    </Text>
  )
}

_Text.displayName = '_Text'

export default _Text
