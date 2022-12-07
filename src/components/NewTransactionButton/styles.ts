import styled from 'styled-components'

export const NewTransactionButtonContainer = styled.button`
  height: 3.125rem;
  border: 0;
  background: ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};
  padding: 0 1.25rem;
  gap: 0.625rem;
  border-radius: 0.375rem;
  font-weight: bold;

  &:hover {
    background: ${(props) => props.theme['green-dark']};
    transition: background-color 0.2s;
    filter: brightness(0.9);
  }
`
