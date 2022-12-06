import styled from 'styled-components';

export const SearchTransactionContainer = styled.form`
max-width: 70rem;
margin: 0 auto;
margin-top: 1.5rem;
display: flex;
padding: 0 1.5rem;
gap: 1rem;

input {
   flex: 1;
   border-radius: 0.375rem;
   border: 0;
   background: ${(props) => props.theme['gray-1-background']};
   color: ${(props) => props.theme['gray-5-placeholder']};
   padding: 1rem;

   &::placeholder {
      color: ${(props) => props.theme['gray-5-placeholder']}; 
   } 
}


button {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      border: 0;
      padding: 1rem;
      background: transparent;
      border: 1px solid ${(props) => props.theme['green-light']};
      border-radius: 0.375rem;
      color: ${(props) => props.theme['green-light']};
      font-weight: bold;
      cursor: pointer;

      &:disabled{
      opacity: 0.6;
      cursor: not-allowed;
      }

      &:not(:disabled):hover {
      background: ${(props) => props.theme['green']};
      border-color: ${(props) => props.theme['green']};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
      }
      }
`;
