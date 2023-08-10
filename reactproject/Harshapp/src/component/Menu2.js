import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Menu2() {
  return (
    <div>
        <link to='product'>Product</link>
        <link to="about">About Us</link>
        <Outlet/>
          </div>
          
  );
}
