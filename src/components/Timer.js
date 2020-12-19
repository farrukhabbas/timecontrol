import React, {useState} from 'react';
import {Text} from 'react-native-design-utility';
import {theme} from '../../theme';
import {useInterval} from '../utils';

const Timer = ({time, speed}) => {
  const [opacity, setOpacity] = useState(1);

  const formatedTime = () => {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);

    let txtMin = min > 9 ? min : '0' + min;
    let txtSec = sec > 9 ? sec : '0' + sec;

    return `${txtMin}:${txtSec}`;
  };

  useInterval(
    () => {
      setOpacity(opacity ? 0 : 1);
    },
    time > 0 && time <= 10 ? speed / 2 : null,
  );

  return (
    <Text
      f={2}
      right
      size={theme.text.size.xxl}
      bold
      o={time > 0 ? opacity : 1}
      ml="md"
      style
      color={time > 20 || time === 0 ? theme.color.black : theme.color.red}>
      {formatedTime()}
    </Text>
  );
};

export default Timer;
