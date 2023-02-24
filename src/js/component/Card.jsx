import React from "react";

export default function Card  () {
return(
    // <div className="d-inline-flex">
    <div className="row col-3 p-3">
        <img src="http://via.placeholder.com/500x325" alt="" />
        <h1>Card title</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis itaque debitis corrupti esse quam odit, quos, magni possimus dolore, necessitatibus delectus perferendis mollitia culpa cumque? Est incidunt eaque accusantium placeat!</p>
        <button type="button" className="btn btn-primary">Find Out More!</button>
    </div>
);
};