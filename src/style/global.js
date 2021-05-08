import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        font-family: 'Bentham';
        font-size: 1rem;    
        box-sizing: border-box;
    }

    :root {
        --gradient: linear-gradient(#DC0000, #000000);
        --grey: #C4C4C4;
    }

    body {        
        margin: 0;
        background: var(--gradient);        
    }

`