import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import Title from "../../common/title/Title";
import Button from "../../common/button/Button";

function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title title={"Contacts"}/>
                <form className={s.form}>
                    <input className={s.input} type={"text"}/>
                    <input className={s.input} type={"text"}/>
                    <textarea className={s.textarea}></textarea>
                </form>
                <Button title={"Send"} callBack={()=>{}}/>
            </div>

        </div>

    );
}

export default Contacts;
