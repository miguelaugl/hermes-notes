import React, { useState } from 'react';
import { Feather as IconeFeather } from '@expo/vector-icons';

import { getImageUrl } from '../../../../helpers/getImageUrl';

import * as S from './styles';

export interface Item {
  _id: string;
  texto: string;
  editing: boolean;
  foto: string;
}

interface IProps {
  itens: Item[];
  removerTarefa: (itemId: string) => Promise<void>;
  atualizarEdicao: (itemId: string) => Promise<void>;
  atualizarTarefa: (itemId: string, novoTexto: string) => Promise<void>;
}

const Lista = ({
  itens,
  removerTarefa,
  atualizarEdicao,
  atualizarTarefa,
}: IProps) => {
  const [textoEditando, setTextoEditando] = useState('');

  const botaoAtualizarClique = async (itemId: string, texto: string) => {
    await atualizarEdicao(itemId);
    setTextoEditando(texto);
  };

  const finalizarEdicao = async (itemId: string) => {
    await atualizarTarefa(itemId, textoEditando);
  };

  return (
    <S.Container>
      <S.Titulo>Lista de tarefas</S.Titulo>
      <S.ListaScroll showsVerticalScrollIndicator={false}>
        {itens.map(({ _id, texto, editing = false, foto }) => (
          <S.Item key={_id} editing={editing}>
            {!!foto && <S.Imagem source={{ uri: getImageUrl(foto) }} />}
            <S.ItemTexto
              editable={editing}
              value={editing ? textoEditando : texto}
              onChangeText={(text) => setTextoEditando(text)}
            />
            <S.ItemAcoes>
              <S.Acao color="#EE2525" onPress={() => removerTarefa(_id)}>
                <IconeFeather name="trash-2" size={16} color="white" />
              </S.Acao>
              <S.Acao
                color="#50DDC3"
                onPress={
                  editing
                    ? () => finalizarEdicao(_id)
                    : () => botaoAtualizarClique(_id, texto)
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
