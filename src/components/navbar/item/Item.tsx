import React from "react";
// @ts-ignore
import { Link } from "react-scroll";
import s from "./Item.module.scss"

type ItemType = {
    itemTitle: string
    id: string
}


const Item = (props: ItemType) => {
    return (
    <Link
        className={s.a}
        activeClass="active"
        to={props.id}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
    >{props.itemTitle}</Link>

    // <a className={s.a} href="">{props.itemTitle}</a>

    )
}

export default Item