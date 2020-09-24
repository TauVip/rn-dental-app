import React, { useState, Component } from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { Item, Input, Label, Picker } from 'native-base';
import styled from 'styled-components';
import DatePicker from 'react-native-datepicker';

import { patientsApi } from '../utils/api';

import { Button, Container } from '../components';

const AddAppointmentScreen = ({ navigation }) => {
  const [values, setValues] = useState({})

  const handleChange = (name, e) => {
    const text = e.nativeEvent.text;
    setValues({
      ...values,
      [name]: text
    })
  }

  const onSubmit = () => {
    patientsApi.add(values).then(() => {
      navigation.navigate('Home');
    }).catch((e) => {
      alert(e)
    })
  }

  return (
    <Container>
      <Item style={{ marginLeft: 0 }} floatingLabel>
        <Label>Номер зуба</Label>
        <Input
          onChange={handleChange.bind(this, 'dentNumber')} 
          value={values.fullname} 
          style={{ marginTop: 12 }} 
          keyboardType="numeric" 
          autoFocus 
        />
      </Item>
      <Item style={{ marginTop: 20, marginLeft: 0 }}>
        <Picker
          mode="dropdown"
          placeholder="Выберите диагноз"
          placeholderStyle={{ color: "#bfc6ea" }}
          placeholderIconColor="#007aff"
          style={{ width: '100%' }}
        >
          <Picker.Item label="Пульпит" value="1" />
          <Picker.Item label="Пародонтоз" value="2" />
          <Picker.Item label="Флюс" value="3" />
        </Picker>
      </Item>
      <Item style={{ marginTop: 20, marginLeft: 0 }} floatingLabel>
        <Label>Цена</Label>
        <Input 
          onChange={handleChange.bind(this, 'price')} 
          value={values.phone} 
          keyboardType="numeric" 
          style={{ marginTop: 12 }} 
        />
      </Item>
      <Item style={{ marginTop: 20, marginLeft: 0 }}>
        <TimeRow>
          <DatePicker
            style={{ width: '50%' }} 
            date={ new Date() }
            mode="date"
            placeholder="Дата"
            format="YYYY-MM-DD"
            minDate={ new Date() }
            confirmBtnText="Сохранить"
            cancelBtnText="Отмена"
            showIcon={false}
            customStyles={{
              dateInput: {
                borderWidth: 0
              }
            }}
          />
          <DatePicker
            style={{ width: '50%' }} 
            date={ new Date() }
            mode="time"
            placeholder="Время"
            format="HH:MM"
            minDate={ new Date() }
            confirmBtnText="Сохранить"
            cancelBtnText="Отмена"
            showIcon={false}
            customStyles={{
              dateInput: {
                borderWidth: 0
              }
            }}
          />
        </TimeRow>
      </Item>
      <ButtonView>
        <Button onPress={onSubmit} color="#87CC6F">
          <Ionicons name="ios-add" size={24} color="white" />
          <Text>Добавить прием</Text>
        </Button>
      </ButtonView>
    </Container>
  )
}

const ButtonView = styled.View`
  flex: 1;
  margin-top: 30px;
`;

const TimeRow = styled.View`
  flex-direction: row;
`;

AddAppointmentScreen.navigationOptions = {
  title: 'Добавить прием',
  headerTintColor: '#2A86FF',
  headerStyle: {
    elevation: 0.8,
    shadowOpacity: 0.8
  }
}

export default AddAppointmentScreen;
