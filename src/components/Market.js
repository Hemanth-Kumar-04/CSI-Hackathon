import React from "react";
import Image1 from "../Assets/img_1.png"
import Image2 from "../Assets/img_2.png"
import Image3 from "../Assets/img_3.png"

function Market(){
    return(
        <div className="Market-container">
            <div className="Market-text">
                <p>Soul-Full Stories</p>
            </div>
            <div className="Market-images">
                <img src={Image1} alt=""/>
                <img src={Image2} alt=""/>
                <img src={Image3} alt=""/>
            </div>
        </div>
        
    )
}

export default Market