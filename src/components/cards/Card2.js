import React from 'react';
import {Badge} from "react-bootstrap";

const Card2 = () => {

    const card2style = {
        minHeight: "10em"
    }

    return (
        <div className="w-100 py-4 px-4 border-1 bg-white " style={card2style}>
            <div className="d-flex align-items-center">
                <h5 className="fs-3 fw-bold text-primary pe-3">Card Box </h5><Badge bg="primary">New</Badge>
            </div>
            <p className="pt-3">This is a card box!</p>
        </div>
    );
};

export default Card2;