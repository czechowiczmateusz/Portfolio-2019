import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import data from "./data/data";
import data2 from "./data/data2";
import * as styles from "./../styles/style.scss";

const App = () => {
    return (
        <Fragment>
            <Header/>
            <AboutMe/>
            <Skills data={data} data2={data2}/>
            <Projects/>
            <Footer/>
        </Fragment>
    )
};



document.addEventListener("DOMContentLoaded",function(){
    ReactDOM.render(
        <App/>,
        document.getElementById("app"),
    )
});