import React from 'react';
import {
  Text,
  TouchableOpacity,
  ColorValue,
  TouchableOpacityProps,
} from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
}

export function Button({
  title,
  color,
  backgroundColor,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={[styles.title, { color }]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}