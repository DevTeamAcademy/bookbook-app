import { createGlobalStyle } from 'styled-components';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans');
  body {
    font-family: 'Noto Sans';
    a {
      text-decoration: none;
    }
  }
  * {
    border: 0;
    margin: 0;
    outline: 0;
    padding: 0;
    font-size: 100%;
    font-style: inherit;
    font-family: inherit;
    font-weight: inherit;
    box-sizing: border-box;
    vertical-align: baseline;
  }
`;
