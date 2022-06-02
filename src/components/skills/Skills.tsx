import React from 'react';
import s from './Skills.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import Skill from "./skill/Skill";
import Title from "../../common/title/Title";
import jsImage from "../../assets/images/js.png"
import cssImage from "../../assets/images/css.png"
import reactImage from "../../assets/images/react.png"

type SkillsPropsType = {
    id: string
}

function Skills(props: SkillsPropsType) {
    const js = {
        backgroundImage: `url(${jsImage})`,
    }

    const css = {
        backgroundImage: `url(${cssImage})`,
    }

    const react = {
        backgroundImage: `url(${reactImage})`,
    }



    return (
        <div className={s.skillsBlock} id={props.id}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={"My Skills"}/>
                <div className={s.skills}>
                    <Skill style={js} title={"JS"} description={"detailed description of the skill"}/>
                    <Skill style={css} title={"CSS"} description={"detailed description of the skill"}/>
                    <Skill style={react} title={"React"} description={"detailed description of the skill"}/>
                </div>
            </div>

        </div>

    );
}

export default Skills;
