import React from 'react';
import s from './Project.module.scss'
import Button from "../../../common/button/Button";

type ProjectPropsType = {
    title: string
    stack: string
    stackTitle: string
    description: any
    descriptionTitle: any
    style: any
    url: string
}

function Project(props: ProjectPropsType) {
    return (
        <div className={s.project}>
            <div className={s.image} style={props.style}>
                <Button title={"Watch"} callBack={()=>{window.open(props.url, "_blank")}}/>
            </div>
            <div className={s.descriptionMainContainer}>
                <div className={s.descriptionContainer}>
                   <div><h2 className={s.title}>{props.title}</h2></div>
                    <div>
                        <div><h2 className={s.title}>{props.stackTitle}</h2></div>
                        <h3 className={s.description}>{props.stack}</h3>
                    </div>
                    <div>
                        <div><h2 className={s.title}>{props.descriptionTitle}</h2></div>
                        <h3 className={s.projectDescription}>{props.description}</h3>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Project;
