import React, { useState } from "react";

const Skills = ({ data, data2 }) => {
    const [turnClass, setTurnClass] = useState('turnoff');
    const [turn, setTurn] = useState(true);
    const [description, setDescription] = useState(false);
    const [text, setText] = useState(null);

    const showDescription = item => {
        if(description === false && !turn) {
            setDescription(true);
            setText(item);
        } else if(description && !turn) {
            setDescription(false);
            setText(null);
            setTimeout(() => {
                setDescription(true);
                setText(item);
            }, 100)
        } else {
            setDescription(false);
            setText(null);
        }
    };

    const turnOff = () => {
        if(turnClass === 'turnon' || turnClass === null) {
            setTurn(true);
            setTurnClass('turnoff');
            setDescription(false);
            setText(null);
        } else {
            setTurn(false);
            setTurnClass('turnon');
            setTimeout(() => {
                setTurnClass(null)
            }, 300)
        }
    };
    return (
        <section className="skills">
            <h2><span>S</span><span>k</span><span>i</span><span>l</span><span>l</span><span>s</span></h2>
            <div className="tv-with-remote-control">
                <div className="tv-container">
                    <img src={require('./../../../styles/images/old-tv.png')} alt="" className="tv"/>
                    <div className="tv-noise">
                        <div className={turnClass}/>
                    </div>
                    <div className="tv-background"/>
                    <div className={description ? "tv-description-turnon tv-description" : "tv-description"}><div dangerouslySetInnerHTML={{ __html: text }}/></div>
                </div>
                <div className="remote-control">
                    <div className="buttons">
                        <ul>
                            <li onClick={turnOff}><span className="list-item"><i className="fas fa-power-off"/></span></li>
                            {data.SkillsList.map(item => {
                                return <li onClick={() => showDescription(item.Description)}><span className="list-item"><i dangerouslySetInnerHTML={{ __html: item.Svg }} className={item.Class}/>{item.Text}</span></li>
                            })}
                        </ul>
                    </div>
                    <div className="buttons">
                        <ul>
                            <li><span className="list-item"><i/></span></li>
                            {data2.SkillsList.map(item => {
                                return <li onClick={() => showDescription(item.Description)}><span className="list-item"><i dangerouslySetInnerHTML={{ __html: item.Text }} className={item.Class}/></span></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills