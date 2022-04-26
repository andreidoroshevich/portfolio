import React from 'react';
import s from './Project.module.css'

type ProjectPropsType = {
    title: string
    // description: string
}


function Project(props: ProjectPropsType) {
    return (
        <div className={s.project}>
            <div className={s.image}>
                <button className={s.button}>Watch</button>
            </div>
            <div className={s.descriptionMainContainer}>
                <div className={s.descriptionContainer}>
                   <div><h2 className={s.title}>Project Title</h2></div>
                    <div><h3 className={s.description}>Project description</h3></div>
                </div>

            </div>
        </div>

    );
}

export default Project;
