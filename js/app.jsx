import React from "react";
import ReactDOM from "react-dom";
require('./../styles/style.scss');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: false
        };
        this.myRef=null;
        this.animation=null
    }
    scrollToMyRef = () => {
        window.scrollTo({
            top: this.myRef.offsetTop,
            behavior: "smooth"
        })
    };
    componentDidMount(){
        console.log("działa");
    }
    toggleAnimation = (e) => {
        e.preventDefault();
        let animation = this.animation.style;
        if(animation.webkitAnimationPlayState === 'running') {
            animation.webkitAnimationPlayState = 'paused';
        } else if(animation.webkitAnimationPlayState !== 'running' && animation.webkitAnimationPlayState !== 'paused') {
            animation.webkitAnimationPlayState = 'paused';
        } else {
            animation.webkitAnimationPlayState = 'running';
        }
        console.log(this.animation.classList);
    };
    turnOff = (e) => {
        e.preventDefault();
        if(this.state.turn === false) {
            this.setState({
                turn: true
            })
        } else {
            this.setState({
                turn: false
            })
        }
    };
    render(){
        return (
            <div>
                <header>
                    <h1>Hi,<br/>I'm Mateusz,<br/>Front-end Developer.</h1>
                    <video ref={node => this.videoNode = node} muted autoPlay playsinline loop>
                        <source src={require('./../styles/videos/timelapse_video.mp4')} type="video/mp4"/>
                    </video>
                    <i onClick={this.scrollToMyRef} className="arrow down"/>
                </header>
                <section className="about-me" ref={ (ref) => this.myRef=ref }>
                    <h2>About me</h2>
                    <p>My name is Mateusz Czechowicz and I'm Front-end Developer. I finished a course of programming JavaScript: React in Coder's Lab - the school of developers. Currently I work at Rockitworks.</p>
                    <div className="image-1">
                        <img src={require('./../styles/images/desk.jpg')} alt=""/>
                    </div>
                    <div className="image-2">
                        <img src={require('./../styles/images/pencil.jpg')} alt=""/>
                    </div>
                </section>
                <section className="skills">
                    <h2>Skills</h2>
                    <div className="tvNoiseContain">
                        <img src={require('./../styles/images/old-tv.png')} alt="" className="tv"/>
                            <div className="noiseContain">
                                <div className={this.state.turn ? "turnoff" : null} ref={ (ref) => this.animation=ref }/>
                            </div>
                            <div className="noiseContainBg"/>
                    </div>
                    <div className="description">
                        <section className="projects">
                            <ul>
                                <li onClick={this.toggleAnimation}><span className="list-item"><i className="fas fa-power-off"/></span></li>
                                <li onClick={this.turnOff}><span className="list-item"><i className="fab fa-html5"/></span></li>
                                <li><span className="list-item"><i className="fab fa-css3-alt"/></span></li>
                                <li><span className="list-item"><i className="fab fa-sass"/></span></li>
                                <li><span className="list-item"><i className="fab fa-js-square"/></span></li>
                                <li><span className="list-item"><i/>jQuery</span></li>
                                <li><span className="list-item"><i className="fab fa-react"/></span></li>
                                <li><span className="list-item"><i className="fab fa-gulp"/></span></li>
                                <li><span className="list-item webpack"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 774 875.7"><title>icon</title><path fill="#FFF" d="M387 0l387 218.9v437.9L387 875.7 0 656.8V218.9z"/><path fill="#8ed6fb" d="M704.9 641.7L399.8 814.3V679.9l190.1-104.6 115 66.4zm20.9-18.9V261.9l-111.6 64.5v232l111.6 64.4zM67.9 641.7L373 814.3V679.9L182.8 575.3 67.9 641.7zM47 622.8V261.9l111.6 64.5v232L47 622.8zm13.1-384.3L373 61.5v129.9L172.5 301.7l-1.6.9-110.8-64.1zm652.6 0l-312.9-177v129.9l200.5 110.2 1.6.9 110.8-64z"/><path fill="#1c78c0" d="M373 649.3L185.4 546.1V341.8L373 450.1v199.2zm26.8 0l187.6-103.1V341.8L399.8 450.1v199.2zm-13.4-207zM198.1 318.2l188.3-103.5 188.3 103.5-188.3 108.7-188.3-108.7z"/></svg></i></span></li>
                            </ul>
                        </section>
                        <section className="projects1">
                            <ul>
                                <li><span className="list-item"><i/></span></li>
                                <li><span className="list-item"><i className="fab fa-npm"/></span></li>
                                <li><span className="list-item"><i dangerouslySetInnerHTML={{ __html: "{REST}" }}/></span></li>
                                <li><span className="list-item"><i className="fab fa-git"/></span></li>
                                <li><span className="list-item"><i className="fab fa-github"/></span></li>
                                <li><span className="list-item"><i className="fab fa-gitlab"/></span></li>
                                <li><span className="list-item"><i/>SEO</span></li>
                                <li><span className="list-item"><i className="fab fa-jira"/></span></li>
                                <li><span className="list-item webpack"><i className="fab fa-confluence"/></span></li>
                            </ul>
                        </section>
                    </div>
                </section>
                <footer>
                    <h2>Contact</h2>
                </footer>
            </div>
        )
    }
}

document.addEventListener("DOMContentLoaded",function(){
    ReactDOM.render(
        <App/>,
        document.getElementById("app"),
    )
});
