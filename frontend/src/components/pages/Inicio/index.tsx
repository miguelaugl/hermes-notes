import React, { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Feather as IconeFeather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Platform } from 'react-native';

import { Cabecalho } from '../../shared/Cabecalho';
import { api } from '../../../services/api';

import * as S from './styles';
import { Item, Lista } from './Lista';
import { ListaVazia } from './ListaVazia';

const Inicio = () => {
  const [novaTexto, setNovaTexto] = useState('');
  const [itens, setItens] = useState([] as Item[]);
  const [carregando, setCarregando] = useState(true);
  const [imagem, setImagem] = useState('');

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const escolherImagem = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImagem(result.uri);
    }
  };

  const removerImagem = () => {
    setImagem('');
  };

  const adicionarTarefa = async () => {
    const filename = imagem.split('/').pop() as string;
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : `image`;
    const formData = new FormData();
    const data = { uri: imagem, name: filename, type } as any;
    formData.append('foto', data);
    formData.append('texto', novaTexto);

    const response = await api.post<Item>('/criar-nota', formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });

    setImagem('');
    setNovaTexto('');
    setItens([...itens, response.data]);
  };

  const removerTarefa = async (itemId: string) => {
    const itensFiltrados = itens.filter((item) => item._id !== itemId);
    setItens(itensFiltrados);

    await api.delete(`/deletar-nota/${itemId}`);
  };

  const atualizarEdicao = async (itemId: string) => {
    const itensAtualizados = itens.map((item) => {
      if (item._id === itemId) {
        return {
          ...item,
          editing: true,
        };
      }

      return { ...item, editing: false };
    });

    setItens(itensAtualizados);
  };

  const atualizarTarefa = async (itemId: string, texto: string) => {
    const { data } = await api.patch<Item>(`/editar-nota/${itemId}`, { texto });

    const notas = itens.map((item) => {
      if (item._id === data._id) {
        return data;
      }

      return item;
    });

    setItens(notas);
  };

  useEffect(() => {
    api.get('/notas').then((response) => {
      const itens = response.data?.map((item: Item) => ({
        ...item,
        editing: false,
      }));

      setItens(itens);
      setCarregando(false);
    });
  }, []);

  if (carregando) return <AppLoading />;

  const botaoUploadTexto = imagem ? 'Remover imagem' : 'Adicionar imagem';
  const onPressBotaoUpload = imagem ? removerImagem : escolherImagem;

  return (
    <>
      <Cabecalho />
      <S.Container>
        <S.AdicionarContainer>
          <S.InputAdicionar
            placeholder="Nova tarefa"
            value={novaTexto}
            onChangeText={(text) => setNovaTexto(text)}
          />
          <S.BotaoAdicionar onPress={adicionarTarefa}>
            <IconeFeather name="plus" size={24} color="#fff" />
          </S.BotaoAdicionar>
        </S.AdicionarContainer>
        <S.BotaoUpload onPress={onPressBotaoUpload}>
          <S.BotaoUploadTexto>{botaoUploadTexto}</S.BotaoUploadTexto>
        </S.BotaoUpload>
        {!!imagem && <S.NotaImagem source={{ uri: imagem }} />}
        {!!itens.length && (
          <Lista
            itens={itens}
            removerTarefa={removerTarefa}
            atualizarEdicao={atualizarEdicao}
            atualizarTarefa={atualizarTarefa}
          />
        )}
        {!itens.length && <ListaVazia />}
      </S.Container>
    </>
  );
};

export { Inicio };
