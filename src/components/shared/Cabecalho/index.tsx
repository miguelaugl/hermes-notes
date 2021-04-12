import React from 'react';

import logoImg from '../../../assets/logo-pequena.png';
import logoTextoImg from '../../../assets/logo-texto.png';

import * as S from './styles';

const Cabecalho: React.FC = () => {
  return (
    <S.Container>
      <S.Logo source={logoImg} resizeMode="contain" />
      <S.LogoTexto source={logoTextoImg} resizeMode="contain" />
    </S.Container>
  );
};

export { Cabecalho };
