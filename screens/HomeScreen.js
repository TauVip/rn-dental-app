import React from 'react'
import { View, SectionList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native'

import { Appointment, SectionTitle } from '../components'

const DATA = [
  {
    title: '14 сентября',
    data: [
      {
        time: '15:30',
        active: true,
        diagnosis: 'пульпит',
        user: {
          fullname: 'Вася Пупкин',
          avatar: 'http://f4.24open.ru/SjgrfT1Nnp.jpg'
        }
      },
      {
        time: '18:00',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Иван Иванов',
          avatar: 'https://i.ytimg.com/vi/tmW-9sFy9mw/maxresdefault.jpg'
        }
      },
      {
        time: '15:30',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Вася Пупкин',
          avatar: 'http://f4.24open.ru/SjgrfT1Nnp.jpg'
        }
      },
      {
        time: '18:00',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Иван Иванов',
          avatar: 'https://i.ytimg.com/vi/tmW-9sFy9mw/maxresdefault.jpg'
        }
      }
    ]
  },
  {
    title: '16 сентября',
    data: [
      {
        time: '15:30',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Вася Пупкин',
          avatar: 'http://f4.24open.ru/SjgrfT1Nnp.jpg'
        }
      },
      {
        time: '18:00',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Иван Иванов',
          avatar: 'https://i.ytimg.com/vi/tmW-9sFy9mw/maxresdefault.jpg'
        }
      },
      {
        time: '15:30',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Вася Пупкин',
          avatar: 'http://f4.24open.ru/SjgrfT1Nnp.jpg'
        }
      },
      {
        time: '18:00',
        diagnosis: 'удаление зуба',
        user: {
          fullname: 'Иван Иванов',
          avatar: 'https://i.ytimg.com/vi/tmW-9sFy9mw/maxresdefault.jpg'
        }
      }
    ]
  }
]

const HomeScreen = ({ navigation }) => (
  <Container>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => (
        <Appointment navigate={navigation.navigate} {...item} />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <SectionTitle>{title}</SectionTitle>
      )}
    />
    <PlusButton>
      <Ionicons name="ios-add" size={36} color="white" />
    </PlusButton>
  </Container>
);

HomeScreen.navigationOptions = {
  title: 'Пациенты',
  headerTintColor: '#2A86FF',
  headerStyle: {
    elevation: 0.8,
    shadowOpacity: 0.8
  }
}

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background-color: #2a86ff;
  position: absolute;
  right: 25px;
  bottom: 25px;
  shadow-color: #2a86ff;
  shadow-opacity: 0.7;
  shadow-radius: 3.5;
  elevation: 4;
`;

const Container = styled.View`
  flex: 1;
`;

export default HomeScreen
