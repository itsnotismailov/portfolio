import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;