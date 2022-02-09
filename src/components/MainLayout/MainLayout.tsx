import React from 'react';
import Logo from "../common/Logo/Logo";
import {StHeader} from "./styled";

const MainLayout = (props:any) => {
    return (
        <>
            <StHeader>
                <Logo/>
            </StHeader>
            <main className="main">{props.children}</main>
        </>
    );
};

export default MainLayout;