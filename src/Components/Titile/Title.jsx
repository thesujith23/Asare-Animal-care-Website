import React from "react";
import './Title.css';

const Title=({title})=>{
    return(
        <div className="Title">
            <h1>{title}</h1>
            <hr className="hor1"/>
        </div>
    )
}

export default Title;