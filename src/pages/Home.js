import React, {useState} from 'react';
import HeroSection1 from "../components/section/HeroSection1";
import CardSection from "../components/section/CardSection";
import CardSection2 from "../components/section/CardSection2";
import TabsSection1 from "../components/section/TabsSection1";
import FaqSection1 from "../components/section/FaqSection1";
import SwiperSection1 from "../components/section/SwiperSection1";
import Modal1 from "../components/modals/Modal1";
import DivisionSection1 from "../components/section/DivisionSection1";
import image4 from "../assets/image/4.jpg"


const Home = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
        <>
            <HeroSection1/>
            <CardSection/>
            <DivisionSection1
                type={""}
                image={image4}
                title={"Hexlant is..."}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            />
            <CardSection2/>
            <DivisionSection1
                type={"reverse"}
                image={image4}
                title={"Token Bank is..."}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            />
            <SwiperSection1/>
            <TabsSection1/>
            <FaqSection1/>
            <Modal1
                show={show}
                handleClose={handleClose}
                title={'default modal title'}
                content={'default modal content - Woohoo, you\'re reading this text in a modal!'}
            />
        </>
    );
};

export default Home;