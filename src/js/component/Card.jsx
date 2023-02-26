import React from "react";

const Card = (props) => {
return(
    <div className="col-3 p-3 px-4">
        <div className="row border rounded-top">
            <img className="p-0" src={props.image} alt="" /> 
        </div>
        <div className="row my-0 py-2 border">
            <h1 className="text-center">{props.cardTitle}</h1>
            <p className="text-center">{props.sumary}</p>
        </div>    
        <div className="row bg-light border rounded-bottom">
            <div className="col d-flex justify-content-center my-2">
                <button type="button" className="btn btn-primary">{props.buttonText}</button>
            </div>
        </div> 
    </div>
);
};

export default Card;