import React from 'react';
import Logo from "../common/Logo/Logo";
import { StHeader, StMain } from "./styled";

const MainLayout = (props:any) => {
    return (
        <>
            <StHeader>
                <Logo/>
            </StHeader>
            <StMain className="main">{props.children}</StMain>
        </>
    );
};

export default MainLayout;
