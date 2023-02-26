import React from "react";

export default function Jumbotron  (props) {
return(
    <div className="container-fluid w-75 bg-light pb-5 px-4">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button type="button" className="btn btn-primary">{props.buttonText}</button>
    </div>
);
}