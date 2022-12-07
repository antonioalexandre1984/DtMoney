import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: ${(props) => props.theme['gray-2-shapePrincipal']};
    color: ${(props) => props.theme['gray-7-texts']};
    -webkit-font-smoothing: antialiased;
}
 
body, input, textarea, button{
    font: 400 1rem 'Roboto', sans-serif;
} 

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}

`
