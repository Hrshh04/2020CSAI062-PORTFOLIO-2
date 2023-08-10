import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Rating2(props){
    let ratting =props.ratting;
    const arr=[];

    for(let i=1;i<=5;i++)
    {
        if(i<= ratting) arr.push(<FontAwesomeIcon icon={faStar} color="red"/>);
        else arr.push(<FontAwesomeIcon icon={faStar} />);
    }
    return <div>{arr}</div>;
}