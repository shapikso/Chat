import React from 'react';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import { Routes, Route} from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import AcceptInvitation from './components/AcceptInvitation/AcceptInvitation';
import SignUp from './components/SignUp/SignUp';
import ErrorInvitation from './components/ErrorInvitation/ErrorInvitation';
import NewPassword from './components/NewPassword/NewPassword';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SignUp />} />
                <Route path="/accept-invitation" element={<AcceptInvitation />} />
                <Route path="/user/error-invitation" element={<ErrorInvitation />} />
                <Route path="/change-password" element={<NewPassword />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </MainLayout>    

    );
}

export default App;
