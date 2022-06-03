import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import Title from "../../common/title/Title";
import styles from "../../common/button/Button.module.scss"
import emailjs from "emailjs-com"


type ContactsPropsType = {
    id: string
}

function Contacts(props: ContactsPropsType) {

    const sendEmail = (e: any)=>{
        e.preventDefault()
        emailjs.sendForm("service_bwpru7n", "template_5lw311h", e.target, "tSV--Lv2gsdM8aYLl")
            .then((res)=>{
                console.log(res.text)
            }, (error)=>{
                console.log(error.text)
            })
        e.target.reset()
    }

    return (
        <div className={s.contactsBlock} id={props.id}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title title={"Contacts"}/>
                <form className={s.form} onSubmit={sendEmail}>
                    <input placeholder={"Your name"} className={s.input} type={"text"} name={"user-name"}/>
                    <input placeholder={"Your email"} className={s.input} type={"text"} name={"user-email"}/>
                    <textarea placeholder={"Your message"} className={s.textarea} name={"message"}></textarea>
                    <button type={'submit'} value={"Send"} className={styles.button}>Send</button>

                </form>
            </div>

        </div>

    );
}

export default Contacts;
