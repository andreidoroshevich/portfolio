import React from 'react';
import s from './Navbar.module.scss'
import Item from "./item/Item";

function Navbar() {
    return (
        <div className={s.navbar}>
            <Item itemTitle={"Main"}/>
            <Item itemTitle={"Skills"}/>
            <Item itemTitle={"Projects"}/>
            <Item itemTitle={"Contacts"}/>
        </div>
    );
}

export default Navbar;
