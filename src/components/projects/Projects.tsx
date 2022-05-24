import React from 'react';
import s from './Projects.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import Project from "./project/Project";
import Title from "../../common/title/Title";
import todoImage from "../../assets/images/todo.png"
import socialImage from "../../assets/images/social.jpg"
import counterImage from "../../assets/images/counter.png"
import bookshelfImage from "../../assets/images/bookshelf.png"

function Projects() {
    const social = {
        backgroundImage: `url(${socialImage})`,
    }

    const todo = {
        backgroundImage: `url(${todoImage})`,
    }

    const bookshelf = {
        backgroundImage: `url(${bookshelfImage})`,
    }

    const counter = {
        backgroundImage: `url(${counterImage})`,
    }



    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title title={"My Projects"}/>
                <div className={s.projects}>
                    <Project style={social} title={"Social Network"} description={"Description of the Project"}/>
                    <Project style={todo} title={"ToDo List"} description={"Description of the Project"}/>
                    <Project style={bookshelf} title={"BookShelf"} description={"Description of the Project"}/>
                    <Project style={counter} title={"Counter"} description={"Description of the Project"}/>
                </div>
            </div>

        </div>

    );
}

export default Projects;
