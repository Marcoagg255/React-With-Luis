import React from "react";

import { ReactDOM } from "react";

import Navbar from "./component/Navbar.jsx";
import Jumbotron from "./component/Jumbotron.jsx";
import Footer from "./component/Footer.jsx";
import Cards from "./component/Cards.jsx";
// import Card from "./component/Card.jsx";

const Home = () => {
    return (
        <>
        <div className="container-fluid">
            <Navbar /> 
            <Jumbotron />
            <Cards />
            <Footer />
            </div>
        </>
    );

 
};

export default Home;
