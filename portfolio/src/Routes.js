import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import MainPage from './pages/MainPage'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/home" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;