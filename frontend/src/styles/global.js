import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *, 
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  body {
    font-size: 100%;
    list-style-type: none;

    background-color: ${({theme}) => theme.COLORS.BG_800};
    color: ${({theme}) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(.9);
  }
`