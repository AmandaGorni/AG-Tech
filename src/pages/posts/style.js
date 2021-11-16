import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  font-size: 80px;
  margin-top: 50px;
  padding: 20px;
`
export const PostContainer = styled.section`
    max-width: 80%;
    margin: 10vh auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; 
`
export const PostBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 420px;
    margin:25px 10px;   
    padding: 30px;
    color: #939393;
    background: linear-gradient(144deg, #24006f -12%, transparent 46%);
    border: 1px dotted #330186;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 2px #fff;
    line-height: 1.5rem;
    letter-spacing: 1px;
    transition: .4s;
    &:hover {
    transform: scale(1.1);
}
  h3{
    color: #0af585;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.1rem;
    border-bottom: 2px solid #7900df;
  }
  p{
    font-size: 16px;
    text-align:justify;
    margin:20px 0;
  }
`

