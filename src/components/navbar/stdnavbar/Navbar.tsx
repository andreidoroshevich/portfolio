import React from 'react';
import s from './Navbar.module.scss'
import Item from "./item/Item";

function Navbar() {
    return (
        <div className={s.navbar}>
            <Item itemTitle={"Main"} id={"main"}/>
            <Item itemTitle={"Skills"} id={"skills"}/>
            <Item itemTitle={"Projects"} id={"projects"}/>
            <Item itemTitle={"Contacts"} id={"contacts"}/>
            <Item itemTitle={"Links"} id={"links"}/>
        </div>
    );
}

export default Navbar;
