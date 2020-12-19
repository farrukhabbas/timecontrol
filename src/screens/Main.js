/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Box, Text} from 'react-native-design-utility';
import {theme} from '../../theme';
import Button from '../components/Button';
import Toggle from '../components/Toggle';
import TimeInput from '../components/TimeInput';
import PlayIcon from '../assets/play.svg';
import Pause from '../assets/pause.svg';
import Timer from '../components/Timer';
import {useInterval} from '../utils';

const SPEED = {
  x1: 2000,
  x2: 1500,
  x3: 800,
};

const MainScreen = () => {
  const [speed, setSpeed] = useState(SPEED.x1);
  const [initTime, setInitTime] = useState(0);
  const [time, setTime] = useState(0);
  const [pause, setPause] = useState(true);

  useInterval(
    () => {
      // setting minus 1 coz the interval is cleared when
      // time == 0
      if (time - 1 <= 0) {
        setPause(true);
      }
      setTime(time - 1);
    },
    initTime === 0 || pause || time === 0 ? null : speed,
  );

  const startTimer = (_time) => {
    setInitTime(parseInt(_time, 10) * 60);
    setTime(parseInt(_time, 10) * 60);
    setPause(false);
  };

  const togglePause = () => {
    if (time > 0) {
      setPause(!pause);
    }
  };

  const changeSpeed = (_speed) => {
    setSpeed(_speed);
  };

  const showText = () => {
    if (initTime * 0.5 < time) {
      return 'Here We Go!';
    } else if (initTime * 0.5 >= time && time > 0) {
      return 'More than halfway there!';
    } else if (time <= 0 && initTime !== 0) {
      return "Time's Up";
    } else if (initTime === 0) {
      return 'Set minutes and press Start';
    }
  };

  return (
    <Box f={1} center>
      <TimeInput onStart={startTimer} />
      <Text size="md" mt="sm" italic bold>
        {showText()}
      </Text>
      <Box dir="row" center mt="sm">
        <Box f={1} />
        <Timer time={time} speed={speed} />

        <Button
          buttonStyle={{
            flex: 1,
            marginLeft: theme.space.sm,
          }}
          onPress={togglePause}>
          {!pause && (
            <Pause
              width={theme.button.icon.width}
              height={theme.button.icon.height}
            />
          )}
          {pause && (
            <PlayIcon
              width={theme.button.icon.width}
              height={theme.button.icon.height}
            />
          )}
        </Button>
      </Box>
      <Box dir="row" center mt="sm">
        <Toggle
          title="1x"
          value={SPEED.x1}
          onPress={changeSpeed}
          activate={speed === SPEED.x1}
        />
        <Toggle
          title="1.5x"
          value={SPEED.x2}
          buttonStyle={{marginHorizontal: theme.space.sm}}
          onPress={changeSpeed}
          activate={speed === SPEED.x2}
        />
        <Toggle
          title="2x"
          value={SPEED.x3}
          onPress={changeSpeed}
          activate={speed === SPEED.x3}
        />
      </Box>
    </Box>
  );
};

export default MainScreen;
