import React from 'react';
import s from './Footer.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import Link from "./link/Link";
import githubLogo from "../../assets/images/github-logo.png"
import codewarsLogo from "../../assets/images/codewars-logo.png"
import linkedinLogo from "../../assets/images/linkedin-logo.png"
import telegramLogo from "../../assets/images/telegram-logo.png"
import {Fade} from "../main/Main";

type FooterPropsType = {
    id: string
}

function Footer(props: FooterPropsType) {
    const github = {
        backgroundImage: `url(${githubLogo})`,
    }

    const codewars = {
        backgroundImage: `url(${codewarsLogo})`,
    }

    const linkedin = {
        backgroundImage: `url(${linkedinLogo})`,
    }

    const telegram = {
        backgroundImage: `url(${telegramLogo})`,
    }


    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer}`} id={props.id}>
                <Fade bottom>
                    <h3 className={s.title}>Andrei Darashevich</h3>

                    <div className={s.footerMiniContainer}>
                        <a target={"_blank"} href={"https://github.com/andreidoroshevich"}><Link style={github}/></a>
                        <a target={"_blank"} href={"https://www.codewars.com/users/andrei_d"}><Link
                            style={codewars}/></a>
                        <a target={"_blank"}
                           href={"https://www.linkedin.com/in/andrei-darashevich-8248a0106/?originalSubdomain=by"}>
                            <Link style={linkedin}/></a>
                        <a target={"_blank"} href={"https://t.me/andrei_doroshevich"}><Link style={telegram}/></a>
                    </div>

                    <span className={s.title}>&#169; 2022, All rights reserved</span>
                </Fade>
            </div>

        </div>

    );
}

export default Footer;
