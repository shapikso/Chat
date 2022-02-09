import React from 'react';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import { Routes, Route} from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Cards from './components/Cards/Cards';

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/cards" element={<Cards />} />
            </Routes>
        </MainLayout>    

    );
}

export default App;
