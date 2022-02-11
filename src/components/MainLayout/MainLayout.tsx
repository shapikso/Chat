import React, {useContext} from 'react';
import Logo from "../common/Logo/Logo";
import {StHeader, StMain, StNav, StGreeting} from "./styled";
import {Link, Outlet} from "react-router-dom";
import Button from '@mui/material/Button';
import {UserContext} from "../../userContext";

const MainLayout = () => {
    const {user, setNewUser} = useContext(UserContext);
    const handleClick = () => setNewUser('');
    return (
        <>
            <StHeader>
                <Logo/>
                <StGreeting>
                        Greeting {user}
                </StGreeting>
                <StNav>
                    <Button variant="text">About</Button>
                    <Link to="/">
                        <Button variant="outlined" onClick={handleClick}> Log Out </Button>
                    </Link>
                </StNav>
            </StHeader>
            <StMain className="main"><Outlet /></StMain>
        </>
    );
};

export default MainLayout;
