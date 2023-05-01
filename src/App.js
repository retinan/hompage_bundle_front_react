import React from 'react';
import {RouterProvider} from "react-router-dom";
import router from "./router";
// import Navi1 from "./components/navis/Navi1";  // mobile: dropdown collapsed
import Navi2 from "./components/navis/Navi2";  // mobile: offcanvas collapsed
import Footer1 from "./components/footers/Footer1";
import './App.css'
import UserProvider from "./provider/UserProvider";
import './lang/i18n';


const App = () => {
    return (
        <>
            <UserProvider>
                {/*<UserContext.Consumer>*/}
                {/*    {(value) => (*/}
                {/*        <>*/}
                {/*            <Navi2 user={value.user} />*/}
                {/*            <RouterProvider router={router} />*/}
                {/*            <Footer1 />*/}
                {/*        </>*/}
                {/*    )}*/}
                {/*</UserContext.Consumer>*/}
                <>
                    <Navi2/>
                    <RouterProvider router={router} />
                    <Footer1 />
                </>
            </UserProvider>
        </>
    );
};

export default App;