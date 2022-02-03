import styled from "styled-components";

export const StButton = styled.button `
  min-width: 300px;
  height: 50px;
  padding: 10px 20px;
  font-size: 16px;
  line-height: 1;
  text-transform: capitalize;
  letter-spacing: 0.1em;
  color: #DBDEE5FF;
  border-radius: 5px;
  background-color: #5C5470FF;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    background-color: #5C547080;
  }
`;