import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import NavLayout from './NavLayout';
import Product from './Product';
import About from './About';

export default function RouteConflict(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<NavLayout/>} >
            <Route path='/product' element={<Product/>} />
            <Route path='/about' element={<About/>} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
}