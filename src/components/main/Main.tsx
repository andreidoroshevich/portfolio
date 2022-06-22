import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import myPhoto from '../../assets/images/myPhoto.jpg'
import ReactTypingEffect from 'react-typing-effect'
import Particles from "react-tsparticles";


type MainPropsType = {
    id: string
}
export const Fade = require("react-reveal/Fade")

const particlesOptions = {
    particles:{
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }

    }
}

function Main(props: MainPropsType) {
    return (
        <div className={s.mainBlock} id={props.id}>
            <Particles className={s.particles} params={particlesOptions}/>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <Fade left>

                    <div className={s.text}>
                        <span>Hi there!</span>
                        <h1>
                            I am Andrei Darashevich</h1>
                        <div>
                            <h3>
                            <ReactTypingEffect
                                text="Front-End Developer"/>
                            </h3>
                        </div>

                        <div className={s.profile}>
                            Front-End developer with experience in creating SPA using React, Redux, Typescript, HTML,
                            CSS/SCSS, JS.
                        </div>
                        <div className={s.profile}>
                            Now I am improving my skills in this direction and expanding them with new technologies.
                            I spend my leisure time with educational books and also improving my English.
                        </div>
                        <p className={s.profile}>
                            Able to effectively self-manage during independent projects, as well as collaborate as part
                            of a productive team.
                        </p>
                    </div>
                </Fade>
                <Fade right>
                    <div className={s.photo}>
                        <img className={s.img} src={myPhoto} alt={"photo"}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Main;