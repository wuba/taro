import * as React from 'react'
import { StyleProp, TextStyle } from 'react-native'

export interface TextProps {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  selectable?: boolean;
  onClick?: () => void;
}
