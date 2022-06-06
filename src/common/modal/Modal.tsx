import React from 'react';
import './Modal.scss';
import Button from "../button/Button";


export type ModalType = {
    active: boolean
    setModalActive: (active: boolean) => void
}

const Modal = (props: ModalType) => {

    return (
        <div className={props.active ? 'modal active' : 'modal'}>
            <div className={props.active ? 'modal-content active' : 'modal-content'}>
                <div>Your message was sent successful!</div>
                <Button title={'OK'} callBack={() => props.setModalActive(false)}/>
            </div>

        </div>


    );
};

export default Modal;