import React, {useState} from 'react';
import {Keyboard, TextInput} from 'react-native';
import {Box, Text} from 'react-native-design-utility';
import {theme} from '../../theme';
import Button from './Button';

const TimeInput = ({inputStyle, onStart}) => {
  const [time, setTime] = useState(0);

  const input = inputStyle || theme.input;

  const startCounter = () => {
    Keyboard.dismiss();
    if (time > 0) {
      onStart(time);
    }
  };

  return (
    <Box dir="row" rows={1} center m="sm">
      <Text size="md">Countdown:</Text>
      <TextInput
        style={input}
        value={'' + time}
        keyboardType="numeric"
        placeholder="(Min)"
        textAlign={'center'}
        onSubmitEditing={startCounter}
        onChangeText={(v) => setTime(v)}
      />
      <Button title="START" onPress={startCounter} />
    </Box>
  );
};

export default TimeInput;
