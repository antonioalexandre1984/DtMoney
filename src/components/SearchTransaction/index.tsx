import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { SearchTransactionContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransaction } from '../../hooks/useTransaction'

const searchTransactionSchema = z.object({
  query: z.string().optional(),
})

type searchTransactionInput = z.infer<typeof searchTransactionSchema>

export function SearchTransaction() {
  const { fetchTransactions } = useTransaction()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<searchTransactionInput>({
    resolver: zodResolver(searchTransactionSchema),
  })
  async function handleSearchTransaction(data: searchTransactionInput) {
    await fetchTransactions(data.query)
    console.log(data)
  }

  return (
    <SearchTransactionContainer
      onSubmit={handleSubmit(handleSearchTransaction)}
    >
      <input
        type="text"
        placeholder="Pesquisar transação"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Pesquisar
      </button>
    </SearchTransactionContainer>
  )
}
