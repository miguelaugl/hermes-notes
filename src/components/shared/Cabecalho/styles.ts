import styled from 'styled-components/native';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';

export const Container = styled.SafeAreaView``;

export const Gradiente = styled(LinearGradient).attrs({
  colors: ['#624AF2', '#50DDC3'],
  start: [0, 0.9],
  end: [1, 1],
  locations: [0, 1],
} as LinearGradientProps)`
  position: relative;
  height: 75px;
  padding: 0 12px;
  elevation: 5;

  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  position: absolute;
  left: 12px;
  max-width: 64px;
`;

export const LogoTexto = styled.Image`
  max-width: 75px;
`;
