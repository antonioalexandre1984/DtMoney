import { NewTransactionButtonContainer } from './styles';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
}

export function NewTransactionButton({ ...props }: ButtonProps) {
  return (
    <NewTransactionButtonContainer {...props}>
      Nova transação
    </NewTransactionButtonContainer >
  );
}
