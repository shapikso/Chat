import React from 'react';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import { Routes, Route} from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Cards from './components/Cards/Cards';
import CardPage from './components/CardPage/CardPage';

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/cards/:id" element={<CardPage />}/>
            </Routes>
        </MainLayout>    

    );
}

export default App;
