import React from 'react';
import {
  Feather as IconeFeather,
  MaterialCommunityIcons as IconeMaterialCommunityIcons,
} from '@expo/vector-icons';

import * as S from './styles';

const itens = [
  'Fazer compras',
  'Fazer aplicativo',
  'Correr',
  'Pular corda',
  'Levar o cachorro pra passear',
  'Comprar bolo',
  'Comer sorvete',
  'Fazer compras',
  'Fazer compras',
  'Fazer compras',
];

const Lista = () => {
  return (
    <S.Container>
      <S.Titulo>Lista de tarefas</S.Titulo>
      <S.ListaScroll showsVerticalScrollIndicator={false}>
        {itens.map((item) => (
          <S.Item key={item}>
            <S.ItemTexto>{item}</S.ItemTexto>
            <S.ItemAcoes>
              <S.Acao color="#EE2525">
                <IconeFeather name="trash-2" size={16} color="white" />
              </S.Acao>
              <S.Acao color="#624af2">
                <IconeMaterialCommunityIcons
                  name="pin-outline"
                  size={16}
                  color="white"
                />
              </S.Acao>
              <S.Acao color="#50DDC3">
                <IconeFeather name="edit-2" size={16} color="white" />
              </S.Acao>
            </S.ItemAcoes>
          </S.Item>
        ))}
      </S.ListaScroll>
    </S.Container>
  );
};

export { Lista };
