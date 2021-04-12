import React from 'react';

import { Cabecalho } from '../../shared/Cabecalho';

import * as S from './styles';

const Inicio = () => {
  return (
    <>
      <Cabecalho />
      <S.Container>
        <S.Title>Hermes Notes</S.Title>
      </S.Container>
    </>
  );
};

export { Inicio };
