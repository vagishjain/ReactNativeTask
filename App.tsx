import 'react-native-gesture-handler';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import ReduxProvider from './src/Components/Provider.wrapper';
import AppNavigation from './src/Navigators/AppNavigator';

enableScreens();

const App = () => (
  <ReduxProvider>
    <AppNavigation />
  </ReduxProvider>
);

export default App;
