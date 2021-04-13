import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import { Feather as IconeFeather } from '@expo/vector-icons';

import { Cabecalho } from '../../shared/Cabecalho';
import { colocarFixadosNoTopo } from '../../../helpers/colocarFixadosNoTopo';

import * as S from './styles';
import { Item, Lista } from './Lista';

const Inicio = () => {
  const [novaTexto, setNovaTexto] = useState('');
  const [itens, setItens] = useState([] as Item[]);
  const [carregando, setCarregando] = useState(true);

  const adicionarTarefa = async () => {
    const itemId = Math.floor(Math.random() * 10000);
    const itensAtualizados = [
      ...itens,
      {
        id: itemId,
        text: novaTexto,
        fixed: false,
        editing: false,
      },
    ];

    await AsyncStorage.setItem(
      '@hermes_itens',
      JSON.stringify(itensAtualizados),
    );

    setItens(itensAtualizados);
    setNovaTexto('');
  };

  const removerTarefa = async (itemId: number) => {
    const itensFiltrados = itens.filter((item) => item.id !== itemId);
    await AsyncStorage.setItem('@hermes_itens', JSON.stringify(itensFiltrados));

    setItens(itensFiltrados);
  };

  const fixarTarefa = async (itemId: number) => {
    const itensAtualizados = itens.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          fixed: !item.fixed,
        };
      }

      return item;
    });

    const itensOrganizados = colocarFixadosNoTopo(itensAtualizados);

    await AsyncStorage.setItem(
      '@hermes_itens',
      JSON.stringify(itensOrganizados),
    );

    setItens(itensOrganizados);
  };

  const atualizarEdicao = async (itemId: number) => {
    const itensAtualizados = itens.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          editing: true,
        };
      }

      return { ...item, editing: false };
    });

    await AsyncStorage.setItem(
      '@hermes_itens',
      JSON.stringify(itensAtualizados),
    );

    setItens(itensAtualizados);
  };

  const atualizarTarefa = async (itemId: number, novoTexto: string) => {
    const itensAtualizados = itens.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          editing: false,
          text: novoTexto,
        };
      }

      return item;
    });

    await AsyncStorage.setItem(
      '@hermes_itens',
      JSON.stringify(itensAtualizados),
    );

    setItens(itensAtualizados);
  };

  useEffect(() => {
    (async () => {
      const itens = JSON.parse(
        (await AsyncStorage.getItem('@hermes_itens')) as string,
      );
      setItens(itens || []);
      setCarregando(false);
    })();
  }, []);

  if (carregando) return <AppLoading />;

  return (
    <>
      <Cabecalho />
      <S.Container>
        <S.InputContainer>
          <S.IconeBusca />
          <S.InputBusca placeholder="Pesquisar" />
        </S.InputContainer>
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
        <Lista
          itens={itens}
          removerTarefa={removerTarefa}
          fixarTarefa={fixarTarefa}
          atualizarEdicao={atualizarEdicao}
          atualizarTarefa={atualizarTarefa}
        />
      </S.Container>
    </>
  );
};

export { Inicio };
