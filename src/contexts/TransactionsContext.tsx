import { createContext, useEffect, useState } from "react"
import { api } from '../lib/axios';

export interface Transaction {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    createdAt: string
}

interface TransactionsContextType {
    loadTransactions: () => Promise<void>
    transactions: Transaction[]
}

interface TransactionsProviderProps {
    children: React.ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function loadTransactions() {
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json();
        console.log(data);
        setTransactions(data);
    }

    useEffect(() => {
        loadTransactions();
    }, []);


    return (
        <TransactionsContext.Provider value={{ transactions, loadTransactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}