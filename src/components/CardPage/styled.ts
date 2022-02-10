import styled from "styled-components";
import img from '../../images/Skin-Content-Background.jpg';
import border from '../../images/Main_page_rail_border.png';


export const StCardWrapper = styled.div`
  background: #ebd19e url(${img}) repeat left top;
  border: 17px solid transparent;
  border-image: url(${border}) 17 repeat;
  display: flex;
  width: 1500px;
  flex-wrap: wrap;
  gap: 25px;
  padding: 15px;
  justify-content: center;
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

export const StContentWrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const StImageWrapper = styled.div`
  width: 50%;
  display: flex;
`;
export const StInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  font-size: 30px;
  color: #1f0c08;
  padding: 50px;
`;

