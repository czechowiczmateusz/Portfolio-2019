import React from "react";
import useGlobal from "./../../Functions/store";

const Header = () => {
    const [globalState, setGlobalState] = useGlobal();
    const scrollToAboutMe = () => {
        window.scrollTo({
            top: globalState.sectionAboutMe.current.offsetTop,
            behavior: 'smooth'
        })
    };

    return (
        <header>
            <h1>Hi,<br/>I'm Mateusz,<br/>Front-end<br/> Developer.</h1>
            <video muted autoPlay playsinline loop>
                <source src={require('./../../../styles/videos/timelapse_video.mp4')} type="video/mp4"/>
            </video>
            <i onClick={scrollToAboutMe} className="arrow down"/>
        </header>
    )
};

export default Header