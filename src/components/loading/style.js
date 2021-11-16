import styled from "styled-components";

export const DualRing = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &::after{
  content: " ";
  display: block;
  width: 44px;
  height: 44px;
  margin: 8px;
  border-radius: 50%;
  border: 7px solid #fff;
  border-color: #fff transparent #0af585 transparent;
  animation: lds-dual-ring 2.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
    
  }
  100% {
    transform: rotate(360deg);
    
    
  }
}
`