import React from 'react';
import s from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
    style: any
}


function Skill(props: SkillPropsType) {


    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <div className={s.iconPicture} style={props.style}/>
            </div>

            <h3 className={s.title}>{props.title}</h3>
            <div className={s.description}>{props.description}</div>
        </div>

    );
}

export default Skill;
