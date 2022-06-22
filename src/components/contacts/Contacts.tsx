import React, {useState} from 'react';
import s from './Contacts.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import Title from "../../common/title/Title";
import styles from "../../common/button/Button.module.scss"
import emailjs from "emailjs-com"
import Modal from "../../common/modal/Modal";
import {Fade} from "../main/Main";


type ContactsPropsType = {
    id: string
}

function Contacts(props: ContactsPropsType) {
    const [modalActive, setModalActive] = useState(false)

    const sendEmail = (e: any) => {
        e.preventDefault()
        emailjs.sendForm("service_bwpru7n", "template_5lw311h", e.target, "tSV--Lv2gsdM8aYLl")
            .then((res) => {
                if (res.text === "OK") {
                    setModalActive(true)
                }
            }, (error) => {
                console.log(error.message)
            })
        e.target.reset()
    }

    return (
        <>
            <div className={s.contactsBlock} id={props.id}>
                <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                    <Fade bottom>
                        <Title title={"Contacts"}/>
                        <form className={s.form} onSubmit={sendEmail}>
                            <input required placeholder={"Your name"} className={s.input} type={"text"} name={"name"}/>
                            <input placeholder={"Your phone number"} className={s.input} type={"text"}
                                   name={"phone-number"}/>
                            <input required placeholder={"Your email"} className={s.input} type={"text"}
                                   name={"user-email"}/>
                            <textarea required placeholder={"Your message"} className={s.textarea} name={"message"}/>
                            <button type={'submit'} value={"Send"} className={styles.button}>Send</button>

                        </form>
                    </Fade>
                </div>
            </div>

            <Modal
                active={modalActive}
                setModalActive={setModalActive}
                message={"Your message was sent successful!"}
            />
        </>

    );
}

export default Contacts;
