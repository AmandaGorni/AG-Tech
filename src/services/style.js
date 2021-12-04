import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 80%;
    line-height: 45px;
    margin: 0 auto;  
    padding: 26px 0;
    h3{
        font-size: 39px;
    }  
    @media only screen and (max-width: 807px) {
      width: 90%;  
         
    }
`
//Menu Hamburguer
export const MenuLink = styled.div`
@media only screen and (max-width: 807px) {
        display: flex;
        justify-content: center;
        position: fixed;
        right: 0;      
        width: 50vw; 
        height: 50vh;
        cursor:pointer;
        background-color: #330186;              
        overflow-x: hidden;
        margin-top: 10vh;
        transition: transform 300ms;
        transform:${({nav}) => (nav ? "translateX(0)": "translateX(100%)")};
    }
    
`
export const MenuBox = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 500px;  
    @media only screen and (max-width: 807px) {
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;
      width: 50%;
    }     
`
export const MenuItem = styled.li`
    width: 100%;
    text-align: center;
    text-decoration: none; 
    display: flex;
    justify-content: space-between;
   
`
export const LinkItem = styled(Link)`
    text-decoration: none;
    position:relative;
    width: 60%;
    
  &::after {
    content:"";
    position:absolute;
    top:100%;
    left:0;
    width:40%;
    height:3px;
    background: transparent;
    transition:0.3s;
    border-radius:10px;  
  }
  &:hover:after{
    width:100%;
    background:#0af585;    
  }
`
export const MenuIcon = styled.div`
    position:absolute;
    top:2rem;
    right:40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 3.125rem;
    height: 2rem;
    background:transparent;
    cursor:pointer;
    z-index:5;
    @media only screen and (min-width: 807px) {
      display: none;
    }
    

    div {
      width: 3rem;
      height: .3rem;
      background-color: #fff;
      transform-origin: 9px;
      border-radius:5px;
      position:relative;
      transition: opacity 300ms, transform 300ms;

      :first-child {
        transform: ${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0)")};
      }
      :nth-child(2) {
        opacity: ${({ nav }) => (nav ? "0" : "1")};
      }
      :nth-child(3) {
        transform: ${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
`
