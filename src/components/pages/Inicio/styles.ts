import styled from 'styled-components/native';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#624AF2', '#50DDC3'],
  start: [0, 0.9],
  end: [1, 1],
  locations: [0, 1],
} as LinearGradientProps)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
`;
