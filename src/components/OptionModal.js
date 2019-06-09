import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.modalText}
        onRequestClose={props.closeModal}>
        <h3>{props.modalText}</h3>
        <button onClick={props.closeModal}>OK</button>
    </Modal>
);

export default OptionModal;