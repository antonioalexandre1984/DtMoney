import {
  TransactionTableContainer,
  TransactionsTable,
  PriceHighlight,
} from './styles'
import { priceFormatter, dateFormatter } from '../../utils/formatMoney'
import { useTransaction } from '../../hooks/useTransaction'

export function TransactionTable() {
  const { transactions } = useTransaction()

  return (
    <TransactionTableContainer>
      <TransactionsTable>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>
                <PriceHighlight variant={transaction.type}>
                  {transaction.type === 'outcome' && '- '}
                  {priceFormatter.format(transaction.value)}
                </PriceHighlight>
              </td>
              <td>{transaction.type}</td>
              <td>{transaction.category}</td>
              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </TransactionsTable>
    </TransactionTableContainer>
  )
}
