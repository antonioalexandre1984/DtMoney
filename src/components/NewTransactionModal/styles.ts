import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 0.375rem;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-1-background']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 0.375rem;
      border: 0;
      background-color: ${(props) => props.theme['gray-2-shapePrincipal']};
      color: ${(props) => props.theme['gray-6-text-base']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-5-placeholder']};
      }
    }

    button[type='submit'] {
      height: 3.625rem;
      border: 0;
      background-color: ${(props) => props.theme.green};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 0.375rem;
      margin-top: 1.5rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme['green-dark']};
        transition: background-color 0.2s;
        filter: brightness(0.9);
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  color: ${(props) => props.theme['gray-5-placeholder']};
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  line-height: 0;
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background: ${(props) => props.theme['gray-3-shapeSecundary']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  border: 0;
  color: ${(props) => props.theme['gray-6-text-base']};
  font-weight: bold;
  cursor: pointer;
  transition: border-color 0.2s;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-light']
        : props.theme.red};
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['gray-3-shapeSecundary']};
    transition: 0.2s;
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${({ theme, variant }) =>
      variant === 'income' ? theme['green-dark'] : theme['red-dark']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
