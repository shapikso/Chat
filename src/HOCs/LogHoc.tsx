import React, {useContext} from 'react';
import {UserContext} from "../userContext";
import {Navigate } from "react-router";

// eslint-disable-next-line react/display-name
const checkAuth = (Component: any) => (props: any) => {
    const {user} = useContext(UserContext);
    console.log(user);
    return user
        ? <Component {...props}/>
        : <Navigate  to="/" />;
};

export default checkAuth;
