import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


* {
    margin:0;
    padding: 0;   
    box-sizing: border-box;
    list-style: none;   
    color: #fff;  
}

body{
    min-height: 100vh;
    background: linear-gradient(to bottom, #0a011e, #0e0227, #0f0430, #0f0539, #110542, #19084f, #23085b, #2d0868, #400e7c, #531390, #6718a5, #7d1db9) no-repeat;
    font-size: 20px;
    font-family: 'Quicksand', sans-serif;
}

`
export default GlobalStyle;