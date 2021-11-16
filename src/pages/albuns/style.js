import styled from "styled-components";

export const Title = styled.h2`
    text-align: center;
    font-size: 80px;
    margin-top: 50px;
    padding: 20px;
`
export const AlbumContainer = styled.section`
    max-width: 80%;
    margin: 10vh auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
`
export const AlbumBox = styled.div`   
    background: linear-gradient(144deg, #24006f -12%, transparent 46%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 400px;
    margin:35px 10px;   
    padding: 30px;
    color: #939393;
    border: 1px dotted #330186;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 2px #fff;
    text-align:center; 
    transition: .4s;
    
    &:hover {
        transform: scale(1.1);
    }
    h3{
        color:#0af585;
        border-bottom: 2px solid #7900df;
    }   
`

export const AlbumImg = styled.div`
    background: url(${props => props.backImg}) center no-repeat;
    width: 300px;
    height: 400px;
    margin:25px 10px;
    text-align: center;
    border-radius: 10px;
    border: 5px solid #330186;
    box-shadow: 0px 0px 20px 2px #7900df;
    transition: .4s;
    
    &:hover {
        transform: scale(1.1);
    }
`
