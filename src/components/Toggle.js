import React from 'react';
import {theme} from '../../theme';
import Button from './Button';

const Toggle = ({title, value, activate, buttonStyle, onPress}) => {
  const style = activate ? theme.button.toggleActive : theme.button.toggle;
  const textStyle = activate
    ? theme.button.toggleLabelActive
    : theme.button.toggleLabel;

  const onToggle = () => {
    onPress(value);
  };

  return (
    <Button
      buttonStyle={[style, buttonStyle]}
      title={title}
      titleStyle={textStyle}
      onPress={onToggle}
    />
  );
};

export default Toggle;
