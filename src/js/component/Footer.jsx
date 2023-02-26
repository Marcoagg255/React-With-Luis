import React from "react";

export default function Footer  (props) {
return(
    <div className="row bg-secondary p-4
     m-0">
        <p className="text-white text-center align-baseline m-0">{props.text}</p>
    </div>
);
}