import React from 'react';
import s from './Skills.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import Skill from "./skill/Skill";
import Title from "../../common/title/Title";
import jsImage from "../../assets/images/js.png"
import cssImage from "../../assets/images/css.png"
import reactImage from "../../assets/images/react.png"
import {Fade} from "../main/Main";

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
                <Fade bottom>
                    <Title title={"My Skills"}/>
                    <div className={s.skills}>
                        <Skill style={js} title={"JS/TS"} description={""}/>
                        <Skill style={css} title={"CSS/SCSS"} description={""}/>
                        <Skill style={react} title={"React/Redux"} description={""}/>
                    </div>
                </Fade>
            </div>

        </div>

    );
}

export default Skills;
