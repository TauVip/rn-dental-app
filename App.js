import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { AddPatientScreen, HomeScreen, PatientScreen, AddAppointmentScreen } from './screens'

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
    },
    AddAppointment: {
      screen: AddAppointmentScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator);
