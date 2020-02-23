import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  :root {
    --primary-color: #2955D9;
    --secondary-color: #0597F2;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100vh;
  }

  body {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased !important;
    color: #7c7c7c;
    background-color: #f2f2f2;
    font-size: 1rem;
  }

  button, select {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #977EF2;
  }

  ul {
    list-style: none;
  }

  @keyframes fade {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes move {
    from {
      opacity: 0;
      transform: translateX(-35%);
    } to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;
