import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {theme} from '../../theme';

const Button = ({title, titleStyle, buttonStyle, onPress, children}) => {
  const style = buttonStyle || theme.button.default;
  const textStyle = titleStyle || theme.button.label;
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <>
        {title && <Text style={textStyle}>{title}</Text>}
        {!title && children}
      </>
    </TouchableOpacity>
  );
};

export default Button;
