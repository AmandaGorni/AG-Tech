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
`
export const MenuBox = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 500px;  
`
export const MenuItem = styled.li`
    width: 25%;
    text-align: center;
    text-decoration: none;   
`
export const LinkItem = styled(Link)`
    text-decoration: none;
    position:relative;
     
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
