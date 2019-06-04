import React, { useEffect, useRef } from "react";
import useGlobal from "./../../Functions/store";

const AboutMe = () => {
    const [globalState, setGlobalState] = useGlobal();
    const aboutMe = useRef(null);
    useEffect(() => {
        setGlobalState({ sectionAboutMe: aboutMe })
    }, []);

    return (
        <section className="about-me" ref={aboutMe}>
            <h2><span>A</span><span>b</span><span>o</span><span>u</span><span>t</span> <span>m</span><span>e</span></h2>
            <p>My name is Mateusz Czechowicz and I'm Front-end Developer. I finished a course of programming: JavaScript: React in Coder's Lab - the school of developers. Currently I'm working at Rockitworks.</p>
            <div className="image-desk">
                <img src={require('./../../../styles/images/desk.jpg')} alt=""/>
            </div>
            <div className="image-pencil">
                <img src={require('./../../../styles/images/pencil.png')} alt=""/>
            </div>
        </section>
    )
};

export default AboutMe