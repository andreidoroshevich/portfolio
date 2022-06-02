import React from 'react';
import s from './Header.module.scss'
import Navbar from "../navbar/Navbar";
import StickyBox from "react-sticky-box";

function Header() {
    return (
        <StickyBox offsetTop={0} offsetBottom={20}>
        <div className={s.header}>
            <Navbar/>
        </div>
        </StickyBox>
    );
}

export default Header;
