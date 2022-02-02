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
                <Route path="/" element={<SignIn />} />
                <Route path="/user/signUp" element={<SignUp />} />
                <Route path="/user/acceptInvitation" element={<AcceptInvitation />} />
                <Route path="/user/errorInvitation" element={<ErrorInvitation />} />
                <Route path="/user/newPassword" element={<NewPassword />} />
                <Route path="/user/forgotPassword" element={<ForgotPassword />} />
            </Routes>
        </MainLayout>    

    );
}

export default App;
