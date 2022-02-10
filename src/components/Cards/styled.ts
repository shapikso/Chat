import styled from "styled-components";
import img from '../../images/Skin-Content-Background.jpg';


export const StCardWrapper = styled.div`
    background: #ebd19e url(${img}) repeat left top;
    display: flex;
    width: 1500px;
    flex-wrap: wrap;
    gap: 25px;
    padding: 15px;
    justify-content: center;
    div {
      background: #D2B48CFF;
    }
  min-height: 65vh;
  align-items: center;
`;
export const StCardActionsWrapper = styled.div`
 div {
   display: flex;
   justify-content: center;
 }
`;

export const StLoader = styled.img`
  width: 100%;
  height: 340px;
  object-fit: none;
`;
