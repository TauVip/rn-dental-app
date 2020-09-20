import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native'
import { Foundation, Ionicons } from '@expo/vector-icons';

import { GrayText, Button, Badge, Container } from '../components'

import { patientsApi } from '../utils/api';

const PatientScreen = ({ navigation }) => {
  const [ appointments, setAppointments ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const id = navigation.getParam('patient')._id;
    patientsApi.show(id).then(({ data }) => {
      setAppointments(data.data.appointments);
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
    })
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <PatientDetails>
        <PatientFullName>{ navigation.getParam('patient', {}).fullname }</PatientFullName>
        <GrayText>{ navigation.getParam('patient', {}).phone }</GrayText>
        <PatientButtons>
          <FormulaButtonView>
            <Button>Формула зубов</Button>
          </FormulaButtonView>
          <PhoneButtonView>
            <Button color="#84D269">
              <Foundation name="telephone" size={22} color="white" />
            </Button>
          </PhoneButtonView>
        </PatientButtons>
      </PatientDetails>

      <PatientAppointments>
        <Container>
          { isLoading ? ( <ActivityIndicator size="large" color="#2A86FF" /> ) :
            (appointments.map(appointment => 
              <AppointmentCard key={appointments._id}>
                <MoreButton>
                  <Ionicons name="md-more" size={24} color="rgba(0, 0, 0, 0.4)" />
                </MoreButton>
                <AppointmentCardRow>
                  <Ionicons name="md-medical" size={16} color="#A3A3A3" />
                  <AppointmentCardLabel>
                    Зуб: <Text style={{ fontWeight: '600' }}>{ appointment.dentNumber }</Text>
                  </AppointmentCardLabel>
                </AppointmentCardRow>
                <AppointmentCardRow>
                  <Foundation name="clipboard-notes" size={16} color="#A3A3A3" />
                  <AppointmentCardLabel>
                    Диагноз: <Text style={{ fontWeight: '600' }}>{ appointment.diagnosis }</Text>
                  </AppointmentCardLabel>
                </AppointmentCardRow>
                <AppointmentCardRow style={{ marginTop: 15, justifyContent: 'space-between' }}>
                  <Badge style={{ width: 155 }} active>
                    { appointment.date } - { appointment.time }
                  </Badge>
                  <Badge color="green">{ appointment.price } P</Badge>
                </AppointmentCardRow>
              </AppointmentCard>
            ))
          }
        </Container>
      </PatientAppointments>
    </View>
  )
}

const MoreButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 10px;
  height: 32px;
  width: 32px;
`;

const AppointmentCardLabel = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;

const AppointmentCardRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3.5px;
  margin-bottom: 3.5px;
`;

const AppointmentCard = styled.View`
  shadow-color: gray;
  elevation: 0.5;
  shadow-opacity: 0.4;
  shadow-radius: 10px;
  padding: 20px 25px;
  border-radius: 10px;
`;

const PatientDetails = styled(Container)`
  flex: 0.3;
`;

const PatientAppointments = styled.View`
  flex: 1;
  background: #f8fafd;
`;

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

PatientScreen.navigationOptions = {
  title: 'Карта пациента',
  headerTintColor: '#2A86FF',
  headerStyle: {
    elevation: 0.8,
    shadowOpacity: 0.8
  }
}

export default PatientScreen;
