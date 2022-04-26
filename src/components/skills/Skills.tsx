import React from 'react';
import s from './Skills.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skills}>
                    <Skill title={"JS"} description={"JS description JS description JS description JS description JS description JS description JS description JS description JS description JS description JS"}/>
                    <Skill title={"CSS"} description={"description CSS description CSS description CSS description CSS"}/>
                    <Skill title={"React"} description={"description React description React description React description React"}/>
                </div>
            </div>

        </div>

    );
}

export default Skills;
