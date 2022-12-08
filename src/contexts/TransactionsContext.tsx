/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  value: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  value: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionsContextType {
  fetchTransactions: (query?: string) => Promise<void>
  transactions: Transaction[]
  createTransaction: (input: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}

/* const DTMONEY_STORAGE_KEY = '@dtmoney:transactions' */

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  /*   const storageTransactions = localStorage.getItem(DTMONEY_STORAGE_KEY) */

  /*   if (storageTransactions) {
      return JSON.parse(storageTransactions)
    }
    return []
  }) */

  /*   useEffect(() => {
    localStorage.setItem(DTMONEY_STORAGE_KEY, JSON.stringify(transactions))
  }, [transactions]) */

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(response.data)
  }

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, value, category, type } = data
      const response = await api.post('/transactions', {
        description,
        value,
        category,
        type,
        createdAt: new Date(),
      })
      setTransactions((state) => [response.data, ...state])
      console.log(response.data)
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
