import * as React from 'react';
import {Text, TextProps} from 'react-native';
import {FC} from 'react';
import {TextStyles} from 'styles/TextStyles';

export type TextType = TextProps & {};
const TextComponent: FC<TextProps> = props => {
  const style = Array.isArray(props.style) ? props.style : [props.style];

  return (
    <Text
      {...props}
      style={style ? [TextStyles.text, ...style] : TextStyles.text}>
      {props.children}
    </Text>
  );
};

export default TextComponent;
