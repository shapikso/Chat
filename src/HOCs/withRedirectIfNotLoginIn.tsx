import React, {useContext} from 'react';
import {UserContext} from "../userContext";
import {Navigate } from "react-router";

// eslint-disable-next-line react/display-name
const withRedirectIfNotLoginIn = (Component: any) => (props: any) => {
    const {user} = useContext(UserContext);
    return user
        ? <Component {...props}/>
        : <Navigate  to="/" />;
};

export default withRedirectIfNotLoginIn;
