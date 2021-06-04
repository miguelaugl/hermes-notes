import { Item } from '../components/pages/Inicio/Lista';

const colocarFixadosNoTopo = (itens: Item[]) => {
  const fixedItens = itens.filter((item) => item.fixed);
  const unfixedItens = itens.filter((item) => !item.fixed);

  return [...fixedItens, ...unfixedItens];
};

export { colocarFixadosNoTopo };
