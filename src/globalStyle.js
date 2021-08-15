import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border;
        font-family: 'Monserarat', sans-serif;
    }
    
    html,body  { 
        overflow-x: hidden;
    }
`

export default GlobalStyle;
