import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeScreen, PatientScreen } from './screens'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Patient: {
      screen: PatientScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator);

// Разработка стоматологического приложения на React Native #5 | 24:03 / 2:46:48

