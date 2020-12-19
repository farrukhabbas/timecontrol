/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {UtilityThemeProvider} from 'react-native-design-utility';
import MainScreen from './src/screens/Main';
import {theme} from './theme';

const App: () => React$Node = () => {
  return (
    <UtilityThemeProvider theme={theme}>
      <MainScreen />
    </UtilityThemeProvider>
  );
};

export default App;
