import React from "react";

const Projects = () => {
    return (
        <section className="projects">
            <h2><span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span>s</span></h2>
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
    )
};

export default Projects