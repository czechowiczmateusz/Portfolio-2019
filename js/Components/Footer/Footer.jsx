import React from "react";

const Footer = () => {
    return (
        <footer>
            <h2><span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span></h2>
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
    )
};

export default Footer