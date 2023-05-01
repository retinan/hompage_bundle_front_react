import React from 'react';
import Swiper1 from "../swiper/Swiper1";
import {Container} from "react-bootstrap";

const SwiperSection1 = () => {
    return (
        <section className="my-5 py-5">
            <Container>
                <h2 className="fs-2-up mb-5 text-center fw-bolder">SwiperSection</h2>
                <Swiper1/>
            </Container>
        </section>
    );
};

export default SwiperSection1;