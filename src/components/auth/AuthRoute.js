import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from "universal-cookie/es6";
import axios from "axios";
import LoadingSpinner from "../common/LoadingSpinner";
import Modal3 from "../modals/Modal3";


const AuthRoute = ({ page }) => {

    const navigate = useNavigate()

    const cookies = new Cookies()
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const url = 'http://127.0.0.1:8000/api/v1/accounts/user/'

    const getUserInfo = async () => {
        try {
            const accessToken = await cookies.get('accessToken')

            const headerConfig = {
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            }
            const { data, status } = await axios.get(url, headerConfig)

            if (status === 200) {
                console.log(data)
                setIsAuthenticated(true)
                setIsLoading(false)
            }
        } catch (e) {
            setIsLoading(false)
            console.log(e)
        }
    }

    useEffect(() => {
        getUserInfo().then(r => null)
    }, []);

    const handleClose = () => navigate("/accounts/login?redirect_to=/board/create")

    return (
        <>
            { isLoading ?
                <LoadingSpinner/>
                :
                <>
                { isAuthenticated ?
                        page
                        :
                        <>
                            <Modal3
                                show={true}
                                handleClose={handleClose}
                                title={'로그인 경고'}
                                content={'로그인이 필요합니다.!'}
                            />
                            {/*<Navigate to="/accounts/login?redirect_to=/board/create" />*/}
                        </>
                }
                </>
            }

        </>
    );
};

export default AuthRoute;
