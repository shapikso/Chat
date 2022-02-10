import styled from "styled-components";
import img from '../../images/Site-background-light.jpg';

export const StHeader = styled.header `
  display: flex;
  justify-content: space-between;
  background:url(${img}) no-repeat left top;
  padding: 20px;
  background-size: cover;
`;

export const StMain = styled.main `
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const StNav = styled.div `
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  button {
    height: 40%;
    //background: #ebd19e;
    color: #ebd19e;
    border-color: #ebd19e;
    :hover{
      border-color: #ebd19e;
    }
  }
`;

export const StGreeting = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align:  center;
  font-size: 30px;
    color: #ebd19e;
    border-color: #ebd19e;
`;

