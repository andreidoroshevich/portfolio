import React from 'react';
import s from './Project.module.scss'
import Button from "../../../common/button/Button";

type ProjectPropsType = {
    title: string
    description: string
    style: any
}


function Project(props: ProjectPropsType) {
    return (
        <div className={s.project}>
            <div className={s.image} style={props.style}>
                <Button title={"Watch"} callBack={()=>{}}/>
            </div>
            <div className={s.descriptionMainContainer}>
                <div className={s.descriptionContainer}>
                   <div><h2 className={s.title}>{props.title}</h2></div>
                    <div><h3 className={s.description}>{props.description}</h3></div>
                </div>

            </div>
        </div>

    );
}

export default Project;
