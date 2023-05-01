import React from 'react';
import {Button, Modal} from "react-bootstrap";

const Modal1 = ({show, handleClose, title, content, eventHandle }) => {



    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{content}</Modal.Body>
                <Modal.Footer className={"d-flex justify-content-center"}>
                    <Button variant="primary" onClick={eventHandle}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Modal1;