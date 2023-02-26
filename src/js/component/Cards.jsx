import React from "react";
import Card from "./Card.jsx";

const Cards = () => {
return(
    <div className="row d-inline-flex p-0 m-0">
        <Card 
            image="http://via.placeholder.com/500x325" 
            cardTitle="First Card" 
            sumary= "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod obcaecati quae cupiditate adipisci vitae magnam, odio earum quibusdam quaerat sint tempore optio minima sequi dolor. Aspernatur, sint. Cumque, quod accusantium?"
            buttonText="Find Out More!" 
        />
        <Card 
            image="http://via.placeholder.com/500x325" 
            cardTitle="Second Card" 
            sumary="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod obcaecati quae cupiditate adipisci vitae magnam, odio earum quibusdam quaerat sint tempore optio minima sequi dolor. Aspernatur, sint. Cumque, quod accusantium?" 
            buttonText="Find Out More!"
        />
        <Card
            image="http://via.placeholder.com/500x325" 
            cardTitle="Third Card" 
            sumary="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod obcaecati quae cupiditate adipisci vitae magnam, odio earum quibusdam quaerat sint tempore optio minima sequi dolor. Aspernatur, sint. Cumque, quod accusantium?" 
            buttonText="Find Out More!"
        />
        <Card
            image="http://via.placeholder.com/500x325" 
            cardTitle="Forth Card" 
            sumary="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod obcaecati quae cupiditate adipisci vitae magnam, odio earum quibusdam quaerat sint tempore optio minima sequi dolor. Aspernatur, sint. Cumque, quod accusantium?" 
            buttonText="Find Out More!" 
        />
    </div>
);
};

export default Cards;