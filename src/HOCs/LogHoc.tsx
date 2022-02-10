import React, {useContext} from 'react';
import {UserContext} from "../userContext";
import {Navigate } from "react-router";

const checkAuth = (Component: any) => {
    const {user} = useContext(UserContext);
    return user
        ? class AuthHoc extends React.Component {
            render() {
                return <Component {...this.props}/>;
            }
        } : <Navigate  to="/" />;
};

export default checkAuth;