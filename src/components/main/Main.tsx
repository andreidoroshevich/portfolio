import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import myPhoto from '../../assets/images/myPhoto.jpg'
import ReactTypingEffect from 'react-typing-effect'
import particlesConfig from '../../assets/particlesConfig.json'

type MainPropsType = {
    id: string
}
export const Fade = require("react-reveal/Fade")
const Particles = require('react-tsparticles')

function Main(props: MainPropsType) {
    return (
        <div className={s.mainBlock} id={props.id}>
            <Particles params={particlesConfig} />
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
                            Enthusiastic front-developer with 10 months of experience in web development and design.

                        </div>
                        <div className={s.profile}>
                            Completed several courses with high grades and recognition of trainers.
                            Extremely passionate towards software architecture and design combined with sensitivity to
                            serve the needs of the business balanced with the delivery of high-quality solutions.
                        </div>
                        <p className={s.profile}>
                            Looking for an opportunity to grow front-end development skills in an innovative environment.
                        </p>
                    </div>
                </Fade>
                <Fade right>
                    <div className={s.photo}>
                        <img className={s.img} src={myPhoto} alt={"myLostPhoto"}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Main;