import React from "react";

import Navbar from "./component/Navbar/Navbar.jsx";
import Jumbotron from "./component/Jumbotron.jsx";
import Footer from "./component/Footer.jsx";
import Cards from "./component/Cards.jsx";

const Home = () => {
    return (
        <div className="container-fluid row vh-100 m-0 p-0">
            <Navbar /> 
            <Jumbotron 
                title="A Warm Welcome!" 
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis itaque debitis corrupti esse quam odit, quos, magni possimus dolore, necessitatibus delectus perferendis mollitia culpa cumque? Est incidunt eaque accusantium placeat!" 
                buttonText="Call to action!"
            />
            <Cards />
            <Footer text="Copyright © Your Website 2023"/>
        </div>
    );

 
};

export default Home;
