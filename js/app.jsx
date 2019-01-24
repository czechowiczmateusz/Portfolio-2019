import React from "react";
import ReactDOM from "react-dom";
require('./../styles/style.scss');

const data = {
    "SkillsList": [
        {
            "Class": "fab fa-html5",
            "Text": "",
            "Description": "HTML5"
        },
        {
            "Class": "fab fa-css3-alt",
            "Text": "",
            "Description": "CSS3"
        },
        {
            "Class": "fab fa-sass",
            "Text": "",
            "Description": "SASS"
        },
        {
            "Class": "fab fa-js-square",
            "Text": "",
            "Description": "JavaScript"
        },
        {
            "Class": "",
            "Text": "jQuery",
            "Description": "jQuery"
        },
        {
            "Class": "fab fa-react",
            "Text": "",
            "Description": "React"
        },
        {
            "Class": "fab fa-gulp",
            "Text": "",
            "Description": "Gulp"
        },
        {
            "Class": "webpack",
            "Text": "",
            "Description": "Webpack",
            "Svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 774 875.7\"><path fill=\"#FFF\" d=\"M387 0l387 218.9v437.9L387 875.7 0 656.8V218.9z\"/><path fill=\"#8ed6fb\" d=\"M704.9 641.7L399.8 814.3V679.9l190.1-104.6 115 66.4zm20.9-18.9V261.9l-111.6 64.5v232l111.6 64.4zM67.9 641.7L373 814.3V679.9L182.8 575.3 67.9 641.7zM47 622.8V261.9l111.6 64.5v232L47 622.8zm13.1-384.3L373 61.5v129.9L172.5 301.7l-1.6.9-110.8-64.1zm652.6 0l-312.9-177v129.9l200.5 110.2 1.6.9 110.8-64z\"/><path fill=\"#1c78c0\" d=\"M373 649.3L185.4 546.1V341.8L373 450.1v199.2zm26.8 0l187.6-103.1V341.8L399.8 450.1v199.2zm-13.4-207zM198.1 318.2l188.3-103.5 188.3 103.5-188.3 108.7-188.3-108.7z\"/></svg>"
        }
    ]
};

const data2 = {
    "SkillsList": [
        {
            "Class": "fab fa-npm",
            "Text": "",
            "Description": "NPM"
        },
        {
            "Class": "",
            "Text": "{REST}",
            "Description": "REST_API"
        },
        {
            "Class": "fab fa-git",
            "Text": "",
            "Description": "GIT"
        },
        {
            "Class": "fab fa-github",
            "Text": "",
            "Description": "GitHub"
        },
        {
            "Class": "fab fa-gitlab",
            "Text": "",
            "Description": "GitLab"
        },
        {
            "Class": "",
            "Text": "SEO",
            "Description": "SEO"
        },
        {
            "Class": "fab fa-jira",
            "Text": "",
            "Description": "Jira"
        },
        {
            "Class": "fab fa-confluence",
            "Text": "",
            "Description": "Confluence"
        }
    ]
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            turnClass: "turnoff",
            turn: true,
            description: false
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
    showDescription = (item) => {
        if(this.state.description === false && !this.state.turn) {
            this.setState({
                description: true,
                text: item
            })
        } else if(this.state.description && !this.state.turn) {
            this.setState({
                description: false,
                text: null
            });
            setTimeout(() => {
                this.setState({
                    description: true,
                    text: item
                });
            }, 100)
        } else {
            this.setState({
                description: false,
                text: null
            });
        }
    };
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
    turnOff = () => {
        if(this.state.turnClass === "turnon" || this.state.turnClass === null) {
            this.setState({
                turn: true,
                turnClass: "turnoff",
                description: false,
                text: null
            })
        } else {
            this.setState({
                turn: false,
                turnClass: "turnon"

            });
            setTimeout(() => {
                this.setState({
                    turnClass: null
                });
            }, 300)
        }
    };
    render(){
        return (
            <div>
                <header>
                    <h1>Hi,<br/>I'm Mateusz,<br/>Front-end<br/> Developer.</h1>
                    <video ref={node => this.videoNode = node} muted autoPlay playsinline loop>
                        <source src={require('./../styles/videos/timelapse_video.mp4')} type="video/mp4"/>
                    </video>
                    <i onClick={this.scrollToMyRef} className="arrow down"/>
                </header>
                <section className="about-me" ref={ (ref) => this.myRef=ref }>
                    <h2><span>A</span><span>b</span><span>o</span><span>u</span><span>t</span> <span>m</span><span>e</span></h2>
                    <p>My name is Mateusz Czechowicz and I'm Front-end Developer. I finished a course of programming JavaScript: React in Coder's Lab - the school of developers. Currently I work at Rockitworks.</p>
                    <div className="image-desk">
                        <img src={require('./../styles/images/desk.jpg')} alt=""/>
                    </div>
                    <div className="image-pencil">
                        <img src={require('./../styles/images/pencil.jpg')} alt=""/>
                    </div>
                </section>
                <section className="skills">
                    <h2>Skills</h2>
                    <div className="tv-with-remote-control">
                        <div className="tv-container">
                            <img src={require('./../styles/images/old-tv.png')} alt="" className="tv"/>
                            <div className="tv-noise">
                                <div className={this.state.turnClass} ref={ (ref) => this.animation=ref }/>
                            </div>
                            <div className="tv-background"/>
                            <div className={this.state.description ? "tv-description-turnon tv-description" : "tv-description"}><div dangerouslySetInnerHTML={{ __html: this.state.text }}/></div>
                        </div>
                        <div className="remote-control">
                            <div className="buttons">
                                <ul>
                                    <li onClick={this.turnOff}><span className="list-item"><i className="fas fa-power-off"/></span></li>
                                    {data.SkillsList.map((item) => {
                                        return <li onClick={() => this.showDescription(item.Description)}><span className="list-item"><i dangerouslySetInnerHTML={{ __html: item.Svg }} className={item.Class}/>{item.Text}</span></li>
                                    })}
                                </ul>
                            </div>
                            <div className="buttons">
                                <ul>
                                    <li><span className="list-item"><i/></span></li>
                                    {data2.SkillsList.map((item) => {
                                        return <li onClick={() => this.showDescription(item.Description)}><span className="list-item"><i dangerouslySetInnerHTML={{ __html: item.Text }} className={item.Class}/></span></li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="projects">
                    <h2>Projects</h2>
                    <div className="projectsContent">
                        <div className="project project_supme">
                            <div className="project-link"><a target="_blank" href="https://www.supme.io/"><i className="fa fa-globe"/></a></div>
                            <div className="project project-background"/>
                        </div>
                        <div className="project project_film-search-app">
                            <div className="project-link"><a target="_blank" href="https://github.com/czechowiczmateusz/Film-search-app"><i className="fab fa-github"/></a></div>
                            <div className="project-link"><a target="_blank" href="https://czechowiczmateusz.github.io/Film-search-app/"><i className="fa fa-globe"/></a></div>
                            <div className="project project-background"/>
                        </div>
                        <div className="project project_sit-on-chair">
                            <div className="project-link"><a target="_blank" href="https://github.com/czechowiczmateusz/Sit-on-chair"><i className="fab fa-github"/></a></div>
                            <div className="project-link"><a target="_blank" href="https://czechowiczmateusz.github.io/Sit-on-chair/"><i className="fa fa-globe"/></a></div>
                            <div className="project project-background"/>
                        </div>
                        <div className="project project_sortable-table">
                            <div className="project-link"><a target="_blank" href="https://github.com/czechowiczmateusz/Sortable-table"><i className="fab fa-github"/></a></div>
                            <div className="project-link"><a target="_blank" href="https://czechowiczmateusz.github.io/Sortable-table/"><i className="fa fa-globe"/></a></div>
                            <div className="project project-background"/>
                        </div>
                    </div>
                </section>
                <footer>
                    <h2>Contact</h2>
                    <div className="contactContainer">
                        <i className="fas fa-phone fa-2x"/>
                        <p><a href="tel:+48531323377">+48 531 323 377</a></p>
                        <i className="far fa-envelope fa-2x"/>
                        <p><a href="mailto:matic1.czechowicz@gmail.com">matic1.czechowicz@gmail.com</a></p>
                        <i className="fab fa-github fa-2x"/>
                        <p><a target="_blank"  href="https://github.com/czechowiczmateusz/">https://github.com/czechowiczmateusz/</a></p>
                        <i className="fab fa-linkedin-in fa-2x"/>
                        <p><a target="_blank"  href="https://www.linkedin.com/in/mczechowicz/">https://www.linkedin.com/in/mczechowicz/</a></p>
                    </div>
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