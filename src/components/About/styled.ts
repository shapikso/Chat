import styled from "styled-components";
import img from '../../images/Skin-Content-Background.jpg';
import border from '../../images/Main_page_rail_border.png';


export const StCardWrapper = styled.div`
  background: #ebd19e url(${img}) repeat left top;
  border: 17px solid transparent;
  border-image: url(${border}) 17 repeat;
  display: flex;
  flex-direction: column;
  width: 1500px;
  padding: 15px;
  justify-content: flex-start;
  min-height: 65vh;
  gap: 50px;
  align-items: center;
`;

export const StH1 = styled.h1`
  font-size: 48px;
  color: #1f0c08;
`;
export const StP = styled.p`
  font-size: 24px;
  color: #1f0c08;
`;

