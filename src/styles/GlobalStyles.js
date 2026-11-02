import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./Variables";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-width: 320px;
    background-color: ${colors.background};
    color: ${colors.text};
    font-family: ${fonts.body};
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.heading};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input {
    font: inherit;
  }

  img {
    max-width: 100%;
  }

  ::selection {
    background-color: ${colors.primary};
    color: ${colors.text};
  }
`;

export default GlobalStyle;
