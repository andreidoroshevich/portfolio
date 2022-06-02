import React from 'react';
import s from "../Footer.module.scss";

type LinkPropsType = {
    style: any
}

const Link = (props: LinkPropsType) => {
    return (
        <div className={s.square}>
                <div className={s.iconPicture} style={props.style}/>
        </div>
    );
};

export default Link;