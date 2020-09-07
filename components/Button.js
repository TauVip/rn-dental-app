import React from 'react';
import styled from 'styled-components/native';

const Button = ({ children }) => {
  return (
    <ButtonWrapper>
      <ButtonText>{ children }</ButtonText>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #2a86ff;
  height: 45px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 400;
  font-size: 16px;
`;

export default Button;
