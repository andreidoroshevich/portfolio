import React from 'react';
import s from './Header.module.scss'
import Navbar from "../navbar/Navbar";

function Header() {
    return (
        <div className={s.header}>
            <Navbar/>
        </div>
    );
}

export default Header;
