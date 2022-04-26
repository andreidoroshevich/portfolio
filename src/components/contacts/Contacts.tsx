import React from 'react';
import s from './Contacts.module.css'
import styleContainer from "../../common/styles/Container.module.css";

function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.form}>
                    <input className={s.input} type={"text"}/>
                    <input className={s.input} type={"text"}/>
                    <textarea className={s.textarea}></textarea>
                </form>
                <button className={s.button}>Send</button>
            </div>

        </div>

    );
}

export default Contacts;
