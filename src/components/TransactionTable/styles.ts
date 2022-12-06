import styled from 'styled-components';

interface PriceHighlightProps {
    variant: 'income' | 'outcome';
}
export const TransactionTableContainer = styled.main`
max-width: 70rem;
margin: 0 auto;
margin-top: 2rem auto 0;
padding: 0 1.5rem
`;

export const TransactionsTable = styled.table`
margin-top: 1.5rem;
width: 100%;
border-spacing: 0 0.5rem;
border-collapse: separate;

td {
    padding: 1.25rem 2rem;
    border:0;
    background: ${(props) => props.theme['gray-4-shapeTertiary']};
    
    &:first-child {
        border-top-left-radius: 0.375rem;
        border-bottom-left-radius: 0.375rem;
    }

    &:last-child {
        border-top-right-radius: 0.375rem;
        border-bottom-right-radius: 0.375rem;
    }


}
`;

export const PriceHighlight = styled.span<PriceHighlightProps>`
color: ${(props) => props.variant === 'income' ? props.theme['green'] : props.theme['red']};

`;
