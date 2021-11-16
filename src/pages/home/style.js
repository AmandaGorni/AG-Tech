import styled from "styled-components";

export const Title =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    font-size: 4.3vw;
    h1{
        width: 67%;
        text-align: center;
        text-shadow: 0px 0px 28px rgb(228 228 228 / 40%);
        box-shadow: 0px 0px 16px 5px #330186;  
        background: linear-gradient(144deg, #24006f -12%, transparent 46%);  
    }
    span{
        color:#0af585;     
        background-color: transparent;
    }  
`
export const Instructions = styled.article`
    width: 60%;
    margin:auto;
    padding:10px;
    box-shadow: 0px 0px 16px 5px #330186;
    font-size: 16px;
`