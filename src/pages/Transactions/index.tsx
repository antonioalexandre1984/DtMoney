import { Header } from '../../components/Header'
import { SearchTransaction } from '../../components/SearchTransaction'
import { Summary } from '../../components/Summary'
import { TransactionTable } from '../../components/TransactionTable'
import { TransactionContainer } from './styles'

export function Transactions() {
  return (
    <TransactionContainer>
      <Header />
      <Summary />
      <SearchTransaction />
      <TransactionTable />
    </TransactionContainer>
  )
}
