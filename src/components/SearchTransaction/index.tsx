import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { SearchTransactionContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransaction } from '../../hooks/useTransaction'

/**
 * Por que que um componente rederiza?
 * - Hooks change (mudou o estado,contexto,reducer);
 * - Props change(mudou as propriedades);
 * - Parent re-render (mudou o estado do componente pai);
 * 
 * Qual o fluxo de redenderização?
 * 1 - O React recria o HTML da interface daquele componente;
 * 2 - O React compara o HTML antigo com o novo;
 * 3 - O React aplica as mudanças no HTML;
 
 * Memo
 * 0 - Hooks change (mudou o estado,contexto,reducer);
 * 0.1 - Compara a versão anterior dos hooks e props;
 * 0.2 - Se mudou algo,ele vai permitir a nova renderização;
 */

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
