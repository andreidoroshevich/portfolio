import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'

function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.mainContainer}`}>
                <div className={s.text}>
                    <span>Hi there!</span>
                    <h1>I am Andrei Darashevich</h1>
                    <p>
                        Front-end Developer
                    </p>
                </div>
                <div className={s.photo}>
                    Here will be photo
                </div>
            </div>
        </div>
    );
}

export default Main;
