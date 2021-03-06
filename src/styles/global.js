import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #01354D ;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px sans-serif;
  }

  button{
    cursor: pointer;
  }

  #root{
    margin: 0 auto;
  }
`;
