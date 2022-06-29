import React from 'react';
import s from './Projects.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import Project from "./project/Project";
import Title from "../../common/title/Title";
import todoImage from "../../assets/images/todo.jpg"
import socialImage from "../../assets/images/social.png"
import carRentImage from "../../assets/images/carRent.png"
import bookshelfImage from "../../assets/images/bookshelf.jpg"
import {
    bookShelfDescription,
    carRentDescription,
    socialNetworkDescription,
    todoDescription
} from "./project/descriptions/ProjectsDiscriptions";
import ProjectDescriptor from "./project/descriptions/ProjectDescriptor";
import {v1} from "uuid";

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
                <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                    <Title title={"My Projects"}/>

                    <div className={s.projects}>
                        <Project style={todo}
                                 url={'https://andreidoroshevich.github.io/to-do-list'}
                                 title={"ToDo List, Front-end developer (educational project)"}
                                 stackTitle={'Technology stack: '}
                                 stack={"TypeScript, React, Redux-thunk, Router-dom, react hooks," +
                                     " reducers, Axios, Mui, Formik, Storybook; Bug fixing, deploying;" +
                                     " Covering code with unit tests"}
                                 descriptionTitle={'Project description:'}
                                 description={
                                     <ul>{todoDescription.map(d => <ProjectDescriptor title={d.title}/>)}</ul>}
                        />

                        <Project style={social}
                                 url={'https://andreidoroshevich.github.io/social-network'}
                                 title={"Social Network, Front-end developer (self-educational project)"}
                                 stackTitle={'Technology stack: '}
                                 stack={"TypeScript, React, Redux, Redux-Thunk, react hooks, reducers," +
                                     " React-Router-dom, Axios, Formik; Bug fixing, deploying."}
                                 descriptionTitle={'Project description:'}
                                 description={
                                     <ul>{socialNetworkDescription.map(d => <ProjectDescriptor key={v1()} title={d.title}/>)}</ul>}
                        />

                        <Project style={bookshelf}
                                 url={'https://andreidoroshevich.github.io/bookshelf'}
                                 title={"BookShelf, Front-end developer (educational project)"}
                                 stackTitle={'Technology stack: '}
                                 stack={"TypeScript, React, react hooks, reducers, localStorage, deploying."}
                                 descriptionTitle={'Project description:'}
                                 description={
                                     <ul>{bookShelfDescription.map(d => <ProjectDescriptor title={d.title}/>)}</ul>}
                        />
                        <Project style={carRent}
                                 url={'https://andreidoroshevich.github.io'}
                                 title={"CarRent, Front-end developer (educational project)"}
                                 stackTitle={'Technology stack: '}
                                 stack={"HTML, css, JS, Local Storage, deploying"}
                                 descriptionTitle={'Project description:'}
                                 description={
                                     <ul>{carRentDescription.map(d => <ProjectDescriptor title={d.title}/>)}</ul>
                                 }
                        />
                    </div>
                </div>
        </div>

    )
        ;
}

export default Projects;
