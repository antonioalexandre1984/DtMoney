import {
    TransactionTableContainer,
    TransactionsTable,
    PriceHighlight
} from './styles';

export function TransactionTable() {
    return (
        <TransactionTableContainer>
            <TransactionsTable>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>
                            <PriceHighlight variant='income'>
                                R$ 12.000,00
                            </PriceHighlight>
                        </td>
                        <td>Freelancer</td>
                        <td>02/12/2022</td>
                    </tr>
                    <tr>
                        <td>Manutenção de site</td>
                        <td>
                            <PriceHighlight variant='income'>
                                R$ 1.000,00
                            </PriceHighlight>
                        </td>
                        <td>Desenvolvimento</td>
                        <td>01/12/2022</td>
                    </tr>
                    <tr>
                        <td>Alimentação</td>
                        <td>
                            <PriceHighlight variant='outcome'>
                                R$ - 500,00
                            </PriceHighlight>
                        </td>
                        <td>Despesa Pessoal</td>
                        <td>30/11/2022</td>
                    </tr>
                </tbody>
            </TransactionsTable>
        </TransactionTableContainer>
    );
}
