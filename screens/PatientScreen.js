import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'
import { Foundation } from '@expo/vector-icons';

import { GrayText, Button } from '../components'

const PatientScreen = () => (
  <Container>
    <PatientFullName>Марина Алмазова</PatientFullName>
    <GrayText>+7 (999) 111-22-33</GrayText>
    <PatientButtons>
      <FormulaButtonView>
        <Button>Формула зубов</Button>
      </FormulaButtonView>
      <PhoneButtonView>
        <Button color="green">
          <Foundation name="telephone" size={22} color="white" />
        </Button>
      </PhoneButtonView>
    </PatientButtons>
  </Container>
)

const FormulaButtonView = styled.View`
  flex: 1;
`;

const PhoneButtonView = styled.View`
  margin-left: 10px;
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
