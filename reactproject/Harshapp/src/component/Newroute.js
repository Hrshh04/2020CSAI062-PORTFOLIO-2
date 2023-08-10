import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Newhome from './Newhome'
import { FirstComponent } from './FirstComponent';
import Conditonal from './Conditonal';
import CounterComp from './CounterComp';
import { Gallary,Profile } from './Gallary';
import Style from './Style';
import LocalStorage from './LocalStorage';
import Newnav from './Newnav';
import About from './About';
import Task from './Task';
import Product from './Product';
import Viewtodo from './Viewtodo';


export default function Newroute() {
  return (
    <BrowserRouter>

    <Routes>

        <Route path='/' element={<Newnav/>}>
            <Route index element={<Newhome/>} />
            <Route index path='/portfolio' element={<Newhome/>} />
            <Route index path='/about' element={<About/>}/>
            <Route path='/task' element={<Task/>}/>
            <Route path='/firstcomponent' element={<FirstComponent/>}/>
            <Route path='/conditional' element={<Conditonal/>}/>
            <Route path='/countercomp' element={<CounterComp/>}/>
            <Route path='/gallary' element={<Gallary/>}/>
            <Route path='/viewtodo' element={<Viewtodo/>}/>
            <Route path='/style' element={<Style/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/localstorage' element={<LocalStorage/>}/>

        </Route>


    </Routes>

    </BrowserRouter>

  );
}
