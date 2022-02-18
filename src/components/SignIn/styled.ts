import styled from "styled-components";
import border from '../../images/Main_page_rail_border.png';

export const ActiveFieldWrapper = styled.div`
 display: flex;
  width: 100%;
  width: 500px;
  text-align: center;
  flex-direction: column;
  gap: 25px;
 
  button {
    color: #ebd19e;
    background-color: #1f0c08;
  }
  div{
    label {
      color: #1f0c08;
    }
    fieldset{
      border-color:  #1f0c08;
    }
    
  }
`;

export const SingInWrapper = styled.div`
  width: 700px;
  margin: 300px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 20px;
  background: #ebd19e;
  border: 17px solid transparent;
  border-image: url(${border}) 17 repeat;
`;

export const StFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  border-radius: 10px;
`;

export const StH1 = styled.h1`
 font-size: 48px;
 color: #1f0c08; 
`;
