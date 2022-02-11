import styled from "styled-components";

type TLink = {
    marginTop?: string
}

export const StFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StLinkWrapper = styled.div<TLink>`
  font-size: 24px;
  margin-top: ${({marginTop}) => marginTop || '65px'};
  align-items: center;
  color: #32bbee;

  a {
    text-decoration: none;
    color: #7D9ECE;
  }

  a: hover {
    text-decoration: underline;
    color: #5184ce;
  } 
`;

export const StH1 = styled.h1`
  width: 500px;
  font-size: 24px;
  color: #000000;
  margin: 90px auto 30px;
  padding: 20px;
  text-align: center;
  border: 6px solid rgb(154, 154, 154);
  border-radius: 8px;
  background-color: rgba(240, 250, 255, 0.81);
  box-shadow: 0px 8px 6px 0px rgb(250, 164, 164);
`;
