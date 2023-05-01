import React from 'react';
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

const TabContent = ({img, title, content, link}) => {

    return (
        <>
            <Row className="bg-light py-4 px-3 px-lg-5">
                <Col md={6}>
                    <img src={img} className="w-100" alt=""/>
                </Col>
                <Col md={6} className="ps-3 d-flex flex-column justify-content-between">
                    <div>
                        <h4 className="mt-3 mt-md-0 fs-2 fw-bolder">{title}</h4>
                        <p className="py-3 fs-6 line lh-base">{content}</p>
                    </div>
                    <div>
                        <Link to={link} className="btn btn-primary">Go Somewhere</Link>
                    </div>
                </Col>

            </Row>

        </>
    );
};

export default TabContent;