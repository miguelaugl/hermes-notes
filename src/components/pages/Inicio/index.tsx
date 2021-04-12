import React from 'react';
import { Feather as IconeFeather } from '@expo/vector-icons';

import { Cabecalho } from '../../shared/Cabecalho';

import * as S from './styles';
import { Lista } from './Lista';

const Inicio = () => {
  return (
    <>
      <Cabecalho />
      <S.Container>
        <S.InputContainer>
          <S.IconeBusca />
          <S.InputBusca placeholder="Pesquisar" />
        </S.InputContainer>
        <S.AdicionarContainer>
          <S.InputAdicionar placeholder="Nova tarefa" />
          <S.BotaoAdicionar>
            <IconeFeather name="plus" size={24} color="#fff" />
          </S.BotaoAdicionar>
        </S.AdicionarContainer>
        <Lista />
      </S.Container>
    </>
  );
};

export { Inicio };
