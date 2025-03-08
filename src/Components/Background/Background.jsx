import React from "react";
import './Background.css';
import img1 from '../../imgs/image.png';
import img2 from '../../imgs/bg2.jpg';
import img3 from '../../imgs/bg4.jpg';


const Background = ({heroCount}) => {
    if (heroCount==0){
        return <img src={img1} className="background" alt=""/>
    }
    else if (heroCount==1){
        return <img src={img2} className="background" alt=""/>
    }
    else if (heroCount==2){
        return <img src={img3} className="background" alt=""/>
    }
}

export default Background;