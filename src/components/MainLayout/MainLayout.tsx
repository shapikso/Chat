import React, {useContext} from 'react';
import Logo from "../common/Logo/Logo";
import {StHeader, StMain, StNav, StGreeting} from "./styled";
import {Link, useLocation} from "react-router-dom";
import Button from '@mui/material/Button';
import {UserContext} from "../../userContext";

const MainLayout = (props:any) => {
    const { pathname } = useLocation();
    const {user, setNewUser} = useContext(UserContext);
    const handleClick = () => setNewUser('');
    return (
        <>
            <StHeader>
                <Logo/>
                { pathname === '/'
                    ?  false
                    : ( <><StGreeting>
                        Greeting {user}
                    </StGreeting>
                    <StNav>
                        <Button variant="text">About</Button>
                        <Link to="/">
                            <Button variant="outlined" onClick={handleClick}> Log Out </Button>
                        </Link>
                    </StNav></>)
                }
            </StHeader>
            <StMain className="main">{props.children}</StMain>
        </>
    );
};

export default MainLayout;
