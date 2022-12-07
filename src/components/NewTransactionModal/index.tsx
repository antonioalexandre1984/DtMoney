import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { NewTransactionModalContainer, Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from "./styles";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

enum TransactionsType {
    income = 'income',
    outcome = 'outcome'
}

const NewTransactionModalSchema = z.object({
    description: z.string().min(1).max(100),
    value: z.number().min(0),
    category: z.string().min(1).max(100),
    type: z.nativeEnum(TransactionsType)
});

type NewTransactionModalInput = z.infer<typeof NewTransactionModalSchema>;

export function NewTransactionModal() {
    const { register, handleSubmit, control, formState: { isSubmitting } } = useForm<NewTransactionModalInput>({
        resolver: zodResolver(NewTransactionModalSchema)
    });
    async function handleNewTransactionModal(data: NewTransactionModalInput) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }

    return (
        <NewTransactionModalContainer onSubmit={handleSubmit(handleNewTransactionModal)}>
            <Overlay>
                <Content>
                    <Dialog.Title>New Transaction</Dialog.Title>
                    <CloseButton>
                        <X size={24} />
                    </CloseButton>
                    <form>
                        <input
                            type="text"
                            placeholder="Description"
                            required
                            {...register('description')}
                        />
                        <input
                            type="number"
                            placeholder="Value"
                            required
                            {...register('value', { valueAsNumber: true })}
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            required
                            {...register('category')}
                        />

                        <Controller
                            control={control}
                            name="type"
                            render={({ field }) => {
                                console.log(field)

                                return <TransactionType
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
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
                                </TransactionType>;
                            }}
                        />
                        <button
                            type='submit'
                            disabled={isSubmitting}
                        >
                            Cadastrar
                        </button>
                    </form>
                </Content>
            </Overlay>
        </NewTransactionModalContainer>
    );
}