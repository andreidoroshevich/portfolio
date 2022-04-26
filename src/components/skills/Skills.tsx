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
                    <Skill title={"JS"} description={"detailed description of the skill"}/>
                    <Skill title={"CSS"} description={"detailed description of the skill"}/>
                    <Skill title={"React"} description={"detailed description of the skill"}/>
                </div>
            </div>

        </div>

    );
}

export default Skills;
