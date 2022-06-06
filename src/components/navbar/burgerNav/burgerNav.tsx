import React, {useState} from 'react'
import './burgerNav.scss'
import Item from "../stdnavbar/item/Item";

const BurgerNav = () => {

    return (
        <div>
            <nav className="nav">
                <input type="checkbox" className="nav__cb" id="menu-cb"/>
                <div className="nav__content">
                    <ul className="nav__items">
                        <li className="nav__item">
        <span className="nav__item-text">
            <Item itemTitle={"Main"} id={"main"}/>
        </span>
                        </li>
                        <li className="nav__item">
        <span className="nav__item-text">
            <Item itemTitle={"Skills"} id={"skills"}/>
        </span>
                        </li>
                        <li className="nav__item">
        <span className="nav__item-text">
            <Item itemTitle={"Projects"} id={"projects"}/>
        </span>
                        </li>
                        <li className="nav__item">
        <span className="nav__item-text">
            <Item itemTitle={"Contacts"} id={"contacts"}/>
        </span>
                        </li>
        {/*                <li className="nav__item">*/}
        {/*<span className="nav__item-text">*/}
        {/*    <Item itemTitle={"Links"} id={"links"}/>*/}
        {/*</span>*/}
        {/*                </li>*/}

                    </ul>
                </div>
                <label className="nav__btn" htmlFor="menu-cb"></label>
            </nav>
        </div>
    );
}

export default BurgerNav;
