import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
import Cookies from "universal-cookie/es6";
import {useTranslation} from "react-i18next";


export const UserContext = createContext();

const UserProvider = ({children}) => {

    const { i18n } = useTranslation()

    const [user, setUser] = useState(null);

    const cookies = new Cookies()

    const url = 'http://127.0.0.1:8000/api/v1/accounts/user/'
    const getUser = async () => {
        try {
            const accessToken = await cookies.get('accessToken')
            const headerConfig = {
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            }
            const { data, status } = await axios.get(url, headerConfig)
            console.log(data)
            if (status === 200) {
                setUser(data)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const handleLogout = () => {
        cookies.remove('accessToken', { path: '/' });
        setUser(null);
        window.location.href="/"
    };

    const handleLogin = () => {
        getUser()
    };

    const eventTestHandler = (lang) => {
        i18n.changeLanguage(lang)
    }


    useEffect(() => {
        getUser().then(r => null);
    }, []);

    return (
        <UserContext.Provider value={{ user, handleLogout, handleLogin, eventTestHandler }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;

