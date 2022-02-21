import React from 'react';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import { Routes, Route} from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Cards from './components/Cards';
import CardPage from './components/CardPage';
import About from "./components/About";

function App() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route element={<MainLayout />}>
                <Route path="/cards" element={<Cards />} />
                <Route path="/about" element={<About />} />
                <Route path="/cards/:id" element={<CardPage />}/>
            </Route>
        </Routes>
    );
}

export default App;
