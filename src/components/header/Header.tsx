import React from 'react';
import s from './Header.module.scss'
import Navbar from "../navbar/stdnavbar/Navbar";
import StickyBox from "react-sticky-box";
import BurgerNav from "../navbar/burgerNav/burgerNav";

function Header() {
    return (
        <StickyBox offsetTop={0} offsetBottom={20} className={s.header}>
        <div className={s.header}>
            <Navbar/>
            <BurgerNav/>
        </div>
        </StickyBox>
    );
}

export default Header;
