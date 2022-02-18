import React from 'react';
import {StCardWrapper, StH1, StP} from "./styled";
import {text} from "../../constants/aboutText";
//import checkAuth from '../../HOCs/LogHoc';

const About = () => {
    return (
        <StCardWrapper>
            <StH1>Hearthstone</StH1>
            <StP>{text}</StP>
        </StCardWrapper>
    );
};

export default About;