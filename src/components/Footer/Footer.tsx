import React from 'react';
import s from './Footer.module.css'
import styleContainer from "../../common/styles/Container.module.css";

function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>

                <h3 className={s.title}>Andrei Darashevich</h3>

                <div className={s.footerMiniContainer}>
                    <div className={s.square}></div>
                    <div className={s.square}></div>
                    <div className={s.square}></div>
                    <div className={s.square}></div>
                </div>

                <span className={s.title}>&#169; 2022, All rights reserved</span>

            </div>

        </div>

    );
}

export default Footer;
