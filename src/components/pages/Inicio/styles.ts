import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as IconeFeather } from '@expo/vector-icons';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  padding: 20px 12px;
`;

export const AdicionarContainer = styled.View`
  flex-direction: row;
`;

export const InputContainer = styled.View`
  min-height: 36px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const InputBusca = styled.TextInput`
  padding: 0 8px;
  margin-left: 24px;
  flex: 1;
`;

export const IconeBusca = styled(IconeFeather).attrs({
  name: 'search',
  color: 'rgba(0, 0, 0, 0.2)',
  size: 18,
})`
  position: absolute;
  left: 8px;
`;

export const BotaoAdicionar = styled(RectButton)`
  background: #624af2;
  padding: 5px;
  border-radius: 5px;
  margin-left: 8px;

  align-items: center;
  justify-content: center;
`;

export const InputAdicionar = styled.TextInput`
  padding: 0 12px;
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;
