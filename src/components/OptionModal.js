import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const ModalTitle = styled.h3`
    margin: 0 0 var(--m-size) 0;
`

const ModalBody = styled.div`
    font-size: 2rem;
    font-weight: 300;
    margin: 0 0 var(--l-size) 0;
    word-break: break-all;
`

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.modalText}
        onRequestClose={props.closeModal}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal">
        <ModalBody>
            <ModalTitle>Selected Option</ModalTitle>
            {props.modalText && <p className="modal__body">{props.modalText}</p>}
            <button onClick={props.closeModal}>OK</button>
        </ModalBody>
    </Modal>
);

export default OptionModal;