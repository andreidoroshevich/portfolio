import React from 'react';
import s from "./Button.module.scss"

type ButtonType = {
    title: string
    callBack: () => void
}

const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (

        <button className={s.button} onClick={onClickHandler}> {props.title} </button>

    );
};

export default Button;