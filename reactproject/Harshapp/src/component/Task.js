import React from 'react';


export default function Task (){
    let x=30;
    let y=40;
      
    return(
        <div>
        <h1>Evaluate expresion</h1>
        <h3>{x} {'>'} {y} {':'} {x>y?'True':'False'} </h3>
        </div>
    )
}