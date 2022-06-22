import React from 'react';
import s from './Projects.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import Project from "./project/Project";
import Title from "../../common/title/Title";
import todoImage from "../../assets/images/todo.png"
import socialImage from "../../assets/images/social.png"
import carRentImage from "../../assets/images/carRent.png"
import bookshelfImage from "../../assets/images/bookshelf.png"
import {Fade} from "../main/Main";

type ProjectsPropsType = {
    id: string
}


function Projects(props: ProjectsPropsType) {
    const social = {
        backgroundImage: `url(${socialImage})`,
    }

    const todo = {
        backgroundImage: `url(${todoImage})`,
    }

    const bookshelf = {
        backgroundImage: `url(${bookshelfImage})`,
    }

    const carRent = {
        backgroundImage: `url(${carRentImage})`,
    }


    return (
        <div className={s.projectsBlock} id={props.id}>
            <Fade left>
                <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                    <Title title={"My Projects"}/>

                    <div className={s.projects}>
                        <Project style={social}
                                 url={'https://andreidoroshevich.github.io/social-network'}
                                 title={"Social Network"}
                                 description={"Stack: TypeScript, React, Redux, Redux-Thunk, react hooks, reducers, React-Router-dom, Axios, Formik; Bug fixing, deploying."}/>

                        <Project style={todo}
                                 url={'https://andreidoroshevich.github.io/to-do-list'}
                                 title={"ToDo List"}
                                 description={"Stack: TypeScript, React, Redux-thunk, Router-dom, react hooks, reducers, Axios, Mui, Formik, Storybook; Bug fixing, deploying; Covering code with unit tests"}/>
                        <Project style={bookshelf}
                                 url={'https://andreidoroshevich.github.io/bookshelf'}
                                 title={"BookShelf"}
                                 description={"Stack: TypeScript, React, react hooks, reducers, localStorage, deploying."}/>
                        <Project style={carRent}
                                 url={'https://andreidoroshevich.github.io'}
                                 title={"CarRent"}
                                 description={"Stack: HTML, css, JS, Local Storage, deploying"}/>
                    </div>
                </div>
            </Fade>
        </div>

    )
        ;
}

export default Projects;
