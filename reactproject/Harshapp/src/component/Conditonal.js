import React from "react";

const m=[
    {name:"Sahil", age:"17"},
    {name:"Harsh", age:"92"},
    {name:"Arnim", age:"107"},
    {name:"Pranjal", age:"44"},
];

export default function Conditonal(){
    return (
        m.map(
            (obj)=>{
                return (
                    <>
                <p> Your name is {obj.name} and age is {obj.age}</p>
                </>
                ); 
        }
        )
       
    )
}