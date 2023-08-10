import React from 'react';
import { Link } from 'react-router-dom';
export function Demo(){
    return(
        <h1>Named Component</h1>
    );
}
 export  function FirstComponent(){
    return (
        <>
        <h1>Manga: Jujutsu Kaisen</h1>
        <p>Megumi Fushiguro</p>
        <img src="image\fushiguro.jpg" alt='logo'/>
        </>
    );
}

//export default FirstComponent;