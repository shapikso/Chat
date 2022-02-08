import styled from "styled-components";

type TInput = {
    error: string
}

export const StInput = styled.input<TInput>`
  padding: 14px 25px;
  background: #7D9ECE;
  border: 1px solid ${({error}) => error ? '#FF0000FF' : '#DBDEE5FF'};
  border-radius: 8px;
  height: 20px;
  font-size: 20px;
  color: #ffffff;
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #ffffff;
  }
`;

export const StRelativeWrapper = styled.div `
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StInvalidDiv = styled.div `
  position: absolute;
  width: 300px;
  height: 22px;
  font-size: 14px;
  color: var(--primary-color-invalid);
  bottom: -5px;
`;

export const StForm = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background: linear-gradient(155deg, rgba(255, 255, 255, 0.2) -50%, rgba(255, 255, 255, 0.05) 80%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
`;

