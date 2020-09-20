import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { AddPatientScreen, HomeScreen, PatientScreen } from './screens'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Patient: {
      screen: PatientScreen
    },
    AddPatient: {
      screen: AddPatientScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator);

// Разработка стоматологического приложения на React Native #6 | 42:38 / 2:31:26
