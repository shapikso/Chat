import styled from "styled-components";

export const StButton = styled.button `
  min-width: 500px;
  height: 50px;
  padding: 13px 20px;
  font-size: 24px;
  line-height: 1;
  text-transform: capitalize;
  letter-spacing: 0.1em;
  color: #DBDEE5FF;
  border-radius: 5px;
  background-color: #2D2327;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #7D9ECE;
  }
  &:disabled{
    background-color: #2D2327;
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
