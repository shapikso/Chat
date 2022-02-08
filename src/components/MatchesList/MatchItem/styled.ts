import styled from "styled-components";

export const StDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  gap: 10px;
  align-items: center;
  span {
    font-size: 18px;
    max-width: 60px;
  }
`;
export const StItemWrapper = styled.div`
  padding: 5px;
  cursor: pointer;
  display: flex;
  width: 450px;
  align-items: center;
  gap: 20px;
  border: 1px solid #000;
  border-radius: 5px;
  span {
    font-size: 16px;
    max-width: 60px;
  }
`;

