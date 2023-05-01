import React from 'react';
import {Button, Modal} from "react-bootstrap";

const Modal2 = ({show, handleClose, content, handleEvent}) => {


    return (
        <>
            <Modal size="sm" show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body closeButton>{content}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="danger" onClick={handleEvent}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Modal2;