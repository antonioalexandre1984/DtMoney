import styled, { css } from 'styled-components';

interface SummaryCardProps {
    variant?: 'green' | 'red';
}

export const SummaryContainer = styled.div`
max-width: 70rem;
width: 100%;
margin: 0 auto;
padding: 0 1.5rem;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
margin-top: -5rem;
`;

export const SummaryCard = styled.div<SummaryCardProps>`
background: ${(props) => props.theme['gray-4-shapeTertiary']};
border-radius: 0.375rem;
padding: 2rem;

header {
    display: flex;
    align-items: center;
    justify-content: space-between;    
}
strong{
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
}

${(props) => props.variant === 'green' && css`
background: ${(props) => props.theme['green-dark']};
`};

`;