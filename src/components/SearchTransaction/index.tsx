import { MagnifyingGlass } from 'phosphor-react';
import { SearchTransactionContainer } from './styles';

export function SearchTransaction() {
  return (
    <SearchTransactionContainer>
      <input type="text" placeholder="Pesquisar transação" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Pesquisar
      </button>
    </SearchTransactionContainer>
  );
}
