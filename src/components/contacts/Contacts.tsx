import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import Title from "../../common/title/Title";
import Button from "../../common/button/Button";

type ContactsPropsType = {
    id: string
}

function Contacts(props: ContactsPropsType) {
    return (
        <div className={s.contactsBlock} id={props.id}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title title={"Contacts"}/>
                <form className={s.form}>
                    <input placeholder={"Your name"} className={s.input} type={"text"}/>
                    <input placeholder={"Your email"} className={s.input} type={"text"}/>
                    <textarea placeholder={"Your message"} className={s.textarea}></textarea>
                </form>
                <Button title={"Send"} callBack={()=>{}}/>
            </div>

        </div>

    );
}

export default Contacts;
