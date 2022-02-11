import styled from "styled-components";

type TLink = {
    marginTop?: string
}

export const ActiveFieldWrapper = styled.div`
 display: flex;
  width: 100%;
  width: 500px;
  text-align: center;
  flex-direction: column;
  gap: 25px;
`;

export const SingInWrapper = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 20px;
`;

export const StFormWrapper = styled.div`
 display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 20px;
`;

export const StLinkWrapper = styled.div<TLink>`
  font-size: 24px;
  margin-top: ${({marginTop}) => marginTop || '65px'};
  color: #A6A6A6;

  a {
    text-decoration: none;
    color: #A6A6A6;
  }

  a: hover {
    text-decoration: underline;
    color: #808080;
  } span {
    color: #7D9ECE;
  };

  span:hover {
    text-decoration: underline;
    color: #5184ce;
  }
`;

export const StH1 = styled.h1`
 font-size: 48px;
`;
