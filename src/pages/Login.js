import React, {useContext, useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import axios from "axios";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Cookies from "universal-cookie/es6";
import {UserContext} from "../provider/UserProvider";

const Login = () => {

    const { handleLogin } = useContext(UserContext);

    const location = useLocation();
    const redirectUrl = new URLSearchParams(location.search).get('redirect_to');

    const cookies = new Cookies()
    const navigate = useNavigate()


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    // 에러 메세지 초기화
    const elements = document.querySelectorAll('.error_msg');
    elements.forEach((element) => {
        element.innerHTML = '';
    });

    const url = 'http://127.0.0.1:8000/api/v1/accounts/login/'

    const loginSubmit = async (e) => {

        e.preventDefault()

        const userInput = {
            username,
            password
        }

        try {

            const { data, status } = await axios.post(url, userInput)

            console.log(data, status)

            if (status === 200) {
                cookies.set('accessToken', data.access_token, { path: "/" })
                handleLogin()
                redirectUrl ? navigate(redirectUrl) : navigate('/')

            }

        } catch (e) {
            // 에러 메세지 뿌리기
            setErrorMsg('')
            // input 보더 초기화
            let elements = document.querySelectorAll('input');
            for(let element of elements) {
                element.style.borderColor = "#ced4da";
            }

            const errorData = JSON.parse(e.request.response)
            console.log(errorData)

            for(let key in errorData) {
                let value = errorData[key];
                if (key === 'non_field_errors') {
                    setErrorMsg(value)
                    break
                } else {
                    let element = document.querySelector(`input[name=${key}]`)
                    element.style.borderColor = "red"
                    setErrorMsg(`${key}: ${value}`)
                    break
                }

                // let element = document.getElementById(key);
                // if (element) {
                //     element.innerText = value;
                // }
            }
        }
    }

    return (
        <>
            <Container className="mt-5 py-5">
                <h2 className="mt-4 fs-3-up fw-bolder">Login</h2>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Form onSubmit={loginSubmit} className="py-5">
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Username(Email)</Form.Label>
                        <Form.Control type="email" name="username" placeholder="Enter email" onChange={ e => setUsername(e.target.value)} />
                        <Form.Text className="text-muted">
                            <div id="email" className="pt-2 text-danger error_msg"></div>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={ e => setPassword(e.target.value)}/>
                        <Form.Text className="text-muted">
                            <div id="password" className="pt-2 text-danger error_msg"></div>
                        </Form.Text>
                    </Form.Group>
                    <div className="text-danger">{ errorMsg ? errorMsg : null }</div>
                    <div className="py-3">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                    <Link to="/accounts/signup">signup</Link>
                </Form>
            </Container>
        </>
    );
};

export default Login;
