import React, {useLayoutEffect, useRef} from 'react';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const DivisionSection1 = ({type, image, title, description}) => {

    // animation
    gsap.registerPlugin(ScrollTrigger)

    const main = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const boxes = self.selector('.box');
            boxes.forEach((box) => {
                gsap.to(box, {
                    // x:0,
                    width:'75%',
                    opacity:1,
                    scrollTrigger: {
                        trigger: box,
                        start: 'top 100%',
                        end: 'top 20%',
                        scrub: true,
                    },
                });
            });
        }, main); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);

    return (
        <>
            <div className={type === "reverse" ? "d-sm-flex flex-sm-row-reverse" : "d-sm-flex"} ref={main}>
                <div className={"box bg-common flex-grow-1"} style={{width:"20%", height:"35rem", backgroundImage: `url(${image})`}}>
                </div>
                <div className={`box w-100 bg-white d-flex flex-grow-2 align-items-center ${type === 'reverse' ? 'text-end' : ''}`}>
                    <div className={"py-5 px-3 px-md-5"}>
                        <h3 className={"fs-1 fw-bolder"}>{title}</h3>
                        <p className={"mt-4 fs-5"}>{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DivisionSection1;
