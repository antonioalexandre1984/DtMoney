import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-1-background']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
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
