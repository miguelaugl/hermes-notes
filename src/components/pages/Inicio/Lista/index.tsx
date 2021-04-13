import React, { useState } from 'react';
import {
  Feather as IconeFeather,
  MaterialCommunityIcons as IconeMaterialCommunityIcons,
} from '@expo/vector-icons';

import * as S from './styles';

export interface Item {
  id: number;
  text: string;
  fixed: boolean;
  editing: boolean;
}

interface IProps {
  itens: Item[];
  removerTarefa: (itemId: number) => Promise<void>;
  fixarTarefa: (itemId: number) => Promise<void>;
  atualizarEdicao: (itemId: number) => Promise<void>;
  atualizarTarefa: (itemId: number, novoTexto: string) => Promise<void>;
}

const Lista = ({
  itens,
  removerTarefa,
  fixarTarefa,
  atualizarEdicao,
  atualizarTarefa,
}: IProps) => {
  const [textoEditando, setTextoEditando] = useState('');

  const botaoAtualizarClique = async (itemId: number, texto: string) => {
    await atualizarEdicao(itemId);
    setTextoEditando(texto);
  };

  const finalizarEdicao = async (itemId: number) => {
    await atualizarTarefa(itemId, textoEditando);
  };

  return (
    <S.Container>
      <S.Titulo>Lista de tarefas</S.Titulo>
      <S.ListaScroll showsVerticalScrollIndicator={false}>
        {itens?.map(({ id, text, fixed, editing = false }) => (
          <S.Item key={id} fixed={fixed} editing={editing}>
            <S.ItemTexto
              editable={editing}
              value={editing ? textoEditando : text}
              onChangeText={(text) => setTextoEditando(text)}
            />
            <S.ItemAcoes>
              <S.Acao color="#EE2525" onPress={() => removerTarefa(id)}>
                <IconeFeather name="trash-2" size={16} color="white" />
              </S.Acao>
              <S.Acao color="#624af2" onPress={() => fixarTarefa(id)}>
                <IconeMaterialCommunityIcons
                  name="pin-outline"
                  size={16}
                  color="white"
                />
              </S.Acao>
              <S.Acao
                color="#50DDC3"
                onPress={
                  editing
                    ? () => finalizarEdicao(id)
                    : () => botaoAtualizarClique(id, text)
                }>
                <IconeFeather
                  name={editing ? 'check' : 'edit-2'}
                  size={16}
                  color="white"
                />
              </S.Acao>
            </S.ItemAcoes>
          </S.Item>
        ))}
      </S.ListaScroll>
    </S.Container>
  );
};

export { Lista };
