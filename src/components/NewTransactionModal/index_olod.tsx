import {
    NewTransactionModalContainer,
    Content,
    Overlay,
    CloseButton,
    TransactionType,
    TransactionTypeButton,

} from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleUp, ArrowCircleDown, X } from 'phosphor-react'
export function NewTransactionModal() {
    return (
        <NewTransactionModalContainer>
            <Dialog.Portal>
                <Overlay>
                    <Content>
                        <Dialog.Title>Nova Transação</Dialog.Title>
                        <CloseButton>
                            <X size={24} />
                        </CloseButton>
                        <form>
                            <input type="text" placeholder="Descrição" required />
                            <input type="text" placeholder="Valor" required />
                            <input type="text" placeholder="Categoria" required />
                            <TransactionType>
                                <TransactionTypeButton
                                    value='income'
                                    variant='income'>
                                    <ArrowCircleUp size={24} />
                                    <span>Entrada</span>
                                </TransactionTypeButton>
                                <TransactionTypeButton value='income' variant='outcome'>
                                    <ArrowCircleDown size={24} />
                                    <span>Saida</span>
                                </TransactionTypeButton>
                            </TransactionType>
                            <button type="submit">
                                Cadastrar
                            </button>
                        </form>
                    </Content>
                </Overlay>
            </Dialog.Portal>
        </NewTransactionModalContainer>
    );
}
