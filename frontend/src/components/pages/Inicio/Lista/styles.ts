import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ItemEstiloProps {
  fixed?: boolean;
  editing?: boolean;
}

interface AcaoEstiloProps {
  color: string;
}

export const Container = styled.SafeAreaView``;

export const ListaScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 80,
  },
})``;

export const Titulo = styled.Text`
  font-size: 18px;
  color: #000;
  margin: 16px 0 8px;
  font-family: 'Montserrat_700Bold';
`;

export const Item = styled.View<ItemEstiloProps>`
  ${({ editing }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 10px 0;
    margin-bottom: 8px;
    background: #fff;
    border-bottom-width: 1px;
    border-color: ${editing ? '#50DDC3' : 'rgba(0, 0, 0, 0.2)'};
    border-style: solid;
  `}
`;

export const ItemTexto = styled.TextInput`
  font-size: 16px;
  color: #000;
  font-family: 'Montserrat_400Regular';
  flex: 1;
`;

export const ItemAcoes = styled.View`
  flex-direction: row;
`;

export const Acao = styled(RectButton)<AcaoEstiloProps>`
  ${({ color }) => css`
    background: ${color};
    border-radius: 32px;
    margin-left: 8px;
    padding: 8px;
  `}
`;

export const Imagem = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 30px;
  margin-right: 8px;
`;
