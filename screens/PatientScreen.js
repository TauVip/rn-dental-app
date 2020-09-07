import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'

import { GrayText, Button } from '../components'

const PatientScreen = () => (
  <Container>
    <PatientFullName>Марина Алмазова</PatientFullName>
    <GrayText>+7 (999) 111-22-33</GrayText>
    <PatientButtons>
      <Button>Формула зубов</Button>
      <PhoneButton>P</PhoneButton>
    </PatientButtons>
  </Container>
)

const PhoneButton = styled(Button)`
  background-color: #84d269;
  height: 45px;
  width: 45px;
`;

const PatientButtons = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

const PatientFullName = styled.Text`
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 3px;
`;

const Container = styled.View`
  padding: 25px;
`;

PatientScreen.navigationOptions = {
  title: 'Карта пациента',
  headerTintColor: '#2A86FF',
  headerStyle: {
    elevation: 0.8,
    shadowOpacity: 0.8
  }
}

export default PatientScreen;
