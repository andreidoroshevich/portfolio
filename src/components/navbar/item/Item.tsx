import React from "react";
import s from "./Item.module.scss"

type ItemType = {
    itemTitle: string
}


const Item = (props: ItemType) => {
    return (
        <a className={s.a} href="">{props.itemTitle}</a>

    )
}

export default Item