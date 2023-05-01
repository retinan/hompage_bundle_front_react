import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    EffectFade,
    Navigation,
    HashNavigation,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import image1 from "../../assets/image/1.jpg"
import image2 from "../../assets/image/3.jpg"
import image3 from "../../assets/image/6.jpg"
import image4 from "../../assets/image/5.jpg"
import { Container} from "react-bootstrap";
import './HeroSection2.css'


const HeroSection2 = () => {

    const [activeLink, setActiveLink] = useState('#slide1');

    const handleLinkClick = (e, hash) => {
        setActiveLink(hash);
    };

    return (
        <>
            <div id="slide-link" className={"w-100 position-absolute bg-white"} style={{top:"4rem", zIndex:"10"}}>
                <Container className={"d-flex justify-content-between"}>
                    <a href="#slide1" className={`py-4 fw-bold ${activeLink === "#slide1" ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "#slide1")}>HEXLANT</a>
                    <a href="#slide2" className={`py-4 fw-bold ${activeLink === "#slide2" ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "#slide2")}>OCTET</a>
                    <a href="#slide3" className={`py-4 fw-bold ${activeLink === "#slide3" ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "#slide3")}>TOKENBANK</a>
                    <a href="#slide4" className={`py-4 fw-bold ${activeLink === "#slide4" ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "#slide4")}>CONTRACT</a>
                {/*<Container>*/}
                    {/*<Swiper*/}
                    {/*    loop={true}*/}
                    {/*    freeMode={true}*/}
                    {/*    slidesPerView={4}*/}
                    {/*    watchSlidesProgress={true}*/}
                    {/*    modules={[FreeMode, Navigation]}*/}
                    {/*    className={"mySwiper"}*/}
                    {/*>*/}
                    {/*    <SwiperSlide><a href="#slide1" className={`d-block py-4 fw-bold ${activeLink === "#slide1" ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "#slide1")}>HEXLANT</a></SwiperSlide>*/}
                    {/*    <SwiperSlide><a href="#slide2" className={`d-block py-4 fw-bold ${activeLink === "#slide2" ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "#slide2")}>OCTET</a></SwiperSlide>*/}
                    {/*    <SwiperSlide><a href="#slide3" className={`d-block py-4 fw-bold ${activeLink === "#slide3" ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "#slide3")}>TOKENBANK</a></SwiperSlide>*/}
                    {/*    <SwiperSlide><a href="#slide4" className={`d-block py-4 fw-bold ${activeLink === "#slide4" ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "#slide4")}>CONTRACT</a></SwiperSlide>*/}
                    {/*</Swiper>*/}

                </Container>
            </div>
            <Swiper
                effect={"fade"}
                hashNavigation={{
                    watchState: true,
                }}
                loop={true}
                navigation={true}
                modules={[EffectFade, Navigation, HashNavigation]}
                className="mySwiper2 "
                style={{height:"100vh"}}
            >
                <SwiperSlide data-hash="slide1"
                             className={"bg-common d-flex justify-content-center align-items-center"}
                             style={{ backgroundImage: `url(${image1})` }}
                >
                    <div className={"text-center"}>
                        <div className={"px-5 py-4 fs-1-up fw-bolder bg-white"}>HEXLANT</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-hash="slide2"
                             className={"bg-common d-flex justify-content-center align-items-center"}
                             style={{ backgroundImage: `url(${image2})` }}
                >
                    <div className={"px-5 py-4 fs-1-up fw-bolder bg-white"}>OCTET</div>
                </SwiperSlide>
                <SwiperSlide data-hash="slide3"
                             className={"bg-common d-flex justify-content-center align-items-center"}
                             style={{ backgroundImage: `url(${image3})` }}
                >
                    <div className={"px-5 py-4 fs-1-up fw-bolder bg-white"}>TOKENBANK</div>
                </SwiperSlide>
                <SwiperSlide data-hash="slide4"
                             className={"bg-common d-flex justify-content-center align-items-center"}
                             style={{ backgroundImage: `url(${image4})` }}
                >
                    <div className={"px-5 py-4 fs-1-up fw-bolder bg-white"}>CONTRACT</div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default HeroSection2;