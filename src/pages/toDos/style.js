import styled from "styled-components";

export const Title = styled.h2`
    text-align: center;
    font-size: 80px;
    margin-top: 50px;
    padding: 20px;
`
export const ListContainer = styled.div` 
    width: 70%;
    margin: 10vh auto;
    display: flex;
    flex-wrap: wrap;
`
export const ListWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 80px;
    margin: 10px auto;
    padding: 10px;
    box-shadow: 0px 0px 6px 3.3px  #7900df;
    background: linear-gradient(144deg, #24006f -12%, transparent 46%);
    li{
        margin-left: 10px;
    }
`
export const ListBox = styled.div`
    display: flex;
    justify-content:right;
    align-items: center;
    height: 40px;
    
    button{
    background-color:transparent;
    border-radius: 50%;
    border:2px dotted #3dc21b;
    box-shadow: 0px 0px 6px 3.3px  #7900df;
    height: 30px;
    width: 30px;
    margin: 17px;
    cursor:pointer;    
    }
`
export const UserCard = styled.div`
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
    h2{
        color:#0af585;
        border-bottom: 2px solid #7900df;
    }
    &:hover {
    transform: scale(1.1);
    } 
`
export const UserContainer = styled.section`
    max-width: 80%;
    margin: 10vh auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
