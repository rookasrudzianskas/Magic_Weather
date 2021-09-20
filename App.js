

import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';

const App: () => React$Node = () => {
  // TODO Configure react-native-purchases

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Router />
    </>
  );
};

export default App;
