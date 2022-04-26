import React from 'react';
import s from './Projects.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import Project from "./project/Project";

function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My Projects</h2>
                <div className={s.projects}>
                    <Project title={"Social Network"} description={"Description of the Project"}/>
                    <Project title={"ToDo List"} description={"Description of the Project"}/>
                    <Project title={"BookShelf"} description={"Description of the Project"}/>
                    <Project title={"Counter"} description={"Description of the Project"}/>
                </div>
            </div>

        </div>

    );
}

export default Projects;
