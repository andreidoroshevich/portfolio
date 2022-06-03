import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'

type MainPropsType = {
    id: string
}

function Main(props: MainPropsType) {
    return (
        <div className={s.mainBlock}  id={props.id}>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.text}>
                    <span>Hi there!</span>
                    <h1>I am Andrei Darashevich</h1>
                    <p>
                        Front-End developer
                    </p>

                    <p className={s.profile}>
                        Front-End developer with experience in creating SPA using React, Redux, Typescript, HTML, CSS/SCSS, JS.
                    </p>
                    <p className={s.profile}>
                        Also I have an interest in improving my English.
                    </p>
                    <p className={s.profile}>
                        Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team.
                    </p>
                </div>
                <div className={s.photo}>
                    Here will be my photo
                </div>
            </div>
        </div>
    );
}

export default Main;
