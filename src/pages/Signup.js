import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import Cookies from "universal-cookie/es6";

const Signup = () => {

    const cookies = new Cookies()
    const navigate = useNavigate()

    const [username, setUsername] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [isCheck, setIsCheck] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const checkHandler = () => {
        setIsCheck(!isCheck)
    }

    // 에러 메세지 초기화
    const elements = document.querySelectorAll('.error_msg');
    elements.forEach((element) => {
        element.innerHTML = '';
    });

    const url = 'http://127.0.0.1:8000/api/v1/accounts/signup/'

    const loginSubmit = async (e) => {

        e.preventDefault()

        const userInput = {
            username,
            'email': username,
            password1,
            password2,
            isCheck,
        }

        try {

            const { data, status } = await axios.post(url, userInput)

            console.log(data, status)

            if (status === 201) {
                // cookies.set('accessToken', data.access_token, { path: "/" })
                cookies.set('refreshToken', data.refresh_token, { path: "/" })
                alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다')
                navigate('/accounts/login')
            }

        } catch (e) {

            console.log(e)

            // 에러 메세지 뿌리기
            setErrorMsg('')
            const errorData = JSON.parse(e.request.response)

            // input 보더 초기화
            let elements = document.querySelectorAll('input');
            for(let element of elements) {
                element.style.borderColor = "#ced4da";
            }

            // 에러 발생시 처리 & 보더 컬러 red
            for(let key in errorData) {
                let value = errorData[key];
                if (key === 'non_field_errors') {
                    setErrorMsg(value)
                    break
                } else {
                    if (key === 'email') key = 'username'
                    else if (key === 'password1') key = 'password'
                    else if (key === 'password2') key = 're-password'
                    let element = document.querySelector(`input[name=${key}]`)
                    element.style.borderColor = "red"
                    setErrorMsg(`${key}: ${value}`)
                    break
                }

                // let element = document.getElementById('username');
                // if (element){
                //     console.log(value[0])
                //     element.innerText = value[0];
                //     console.log(element)
                // }

            }
        }

    }


    return (
        <>
            <Container className="mt-5 py-5">
                <h2 className="mt-4 fs-3-up fw-bolder">Signup</h2>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Form onSubmit={loginSubmit} className="py-5">
                    <Form.Group className="mb-4">
                        <Form.Label>Username(Email)</Form.Label>
                        <Form.Control type="email" name="username" placeholder="이메일을 입력해주세요" onChange={ e => setUsername(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="비밀번호를 입력해주세요" onChange={ e => setPassword1(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>re-Password</Form.Label>
                        <Form.Control type="password" name="re-password" placeholder="비밀번호 확인을 입력해주세요" onChange={ e => setPassword2(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" onClick={ checkHandler }/>
                    </Form.Group>

                    <div className="text-danger">{ errorMsg ? errorMsg : null }</div>
                    <div className="py-3">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                    <Link to="/accounts/login">Login</Link>
                </Form>
            </Container>
        </>
    );
};

export default Signup;
