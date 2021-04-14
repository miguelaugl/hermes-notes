import React from 'react';
import { Feather } from '@expo/vector-icons';

import * as S from './styles';

const ListaVazia = () => {
  return (
    <S.Container>
      <Feather name="check-circle" size={92} color="#000" />
      <S.Titulo>Você completou todas suas tarefas!</S.Titulo>
    </S.Container>
  );
};

export { ListaVazia };
