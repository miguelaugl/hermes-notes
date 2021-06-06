import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  padding: 20px 12px;
`;

export const AdicionarContainer = styled.View`
  flex-direction: row;
`;

export const NotaImagem = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin: 10px auto 10px;
`;

export const BotaoAdicionar = styled(RectButton)`
  background: #624af2;
  padding: 5px;
  border-radius: 5px;
  margin-left: 8px;

  align-items: center;
  justify-content: center;
`;

export const BotaoUpload = styled(RectButton)`
  background: #624af2;
  padding: 12px 5px;
  border-radius: 5px;
  margin-top: 8px;

  align-items: center;
  justify-content: center;
`;

export const BotaoUploadTexto = styled.Text`
  font-size: 14px;
  color: #fff;
`;

export const InputAdicionar = styled.TextInput`
  padding: 0 12px;
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-family: 'Montserrat_400Regular';
`;
