import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { NewTransactionModalContainer, Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from "./styles";

export function NewTransactionModal() {
    return (
        <NewTransactionModalContainer>
            <Overlay>
                <Content>
                    <Dialog.Title>New Transaction</Dialog.Title>
                    <CloseButton>
                        <X size={24} />
                    </CloseButton>
                    <form>
                        <input
                            type="text" placeholder="Description" required
                        />
                        <input
                            type="number"
                            placeholder="Value"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            required
                        />
                        <TransactionType>
                            <TransactionTypeButton
                                variant='income'
                                value='income'
                            >
                                <ArrowCircleUp size={32} />
                                <span>Income</span>
                            </TransactionTypeButton>

                            <TransactionTypeButton
                                variant='outcome'
                                value='outcome'
                            >
                                <ArrowCircleDown size={32} />
                                <span>Outcome</span>
                            </TransactionTypeButton>
                        </TransactionType>
                        <button
                            type='submit'>
                            Cadastrar
                        </button>
                    </form>
                </Content>
            </Overlay>
        </NewTransactionModalContainer>
    );
}