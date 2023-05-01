import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Cookies from "universal-cookie/es6";
import Modal3 from "../components/modals/Modal3";


const BoardCreate = () => {

    const navigate = useNavigate()
    const cookies = new Cookies()
    const accessToken = cookies.get('accessToken')

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const url = 'http://127.0.0.1:8000/api/v1/board/'

    const createHandler = async (e) => {

        e.preventDefault()

        const createData = {
            title,
            content,
            image
        }

        const headerConfig = {
            headers: {
                'Content-Type':"multipart/form-data",
                'Authorization': 'Bearer ' + accessToken
            }
        }

        try {

            const { data, status } = await axios.post(url, createData, headerConfig)

            if (status === 201) {
                navigate('/board')
                console.log(data)
            }

        } catch (e) {
            console.log(e)

            setErrorMsg('')
            // input 보더 초기화
            let elements = document.querySelectorAll('input, textarea');
            for(let element of elements) {
                element.style.borderColor = "#ced4da";
            }

            const errorResponse = e.response
            const errorStatus = errorResponse.status
            const errorData = errorResponse.data
            console.log(errorData)

            if(errorStatus === 401) {
                alert('로그인 세션 시간 초과로 로그아웃 되었습니다. 다시 로그인해 주세요')
                window.location.href='/board'
            }

            for(let key in errorData) {
                let value = errorData[key];
                console.log(key, typeof(value))
                if (key === 'non_field_errors') {
                    setErrorMsg(value)
                    break
                } else {
                    let element = document.querySelector(`*[name=${key}]`)
                    element.style.borderColor = "red"
                    setErrorMsg(`${key}: ${value}`)
                    break
                }
            }

        }

    }

    return (
        <>
            <Container className="mt-5 py-5">
                <div className="mb-4">
                    <Button variant="outline-primary" className="btn-sm" onClick={() => navigate('/board')}>목록으로</Button>
                </div>
                <h2 className="mt-4 fs-3-up fw-bolder">Board Create</h2>
                <Form onSubmit={createHandler} className="py-5">
                    <Form.Group className="mb-3" controlId="formBoardTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" name="title" onChange={ e => setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBoardContent">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Enter Content - 최대 1,000자" name="content" onChange={ e => setContent(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Image (optional)</Form.Label>
                        <Form.Control type="file" name="image" onChange={ e => setImage(e.target.files[0])}/>
                    </Form.Group>
                    <div className="my-4 text-danger">{ errorMsg ? errorMsg : null }</div>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                { accessToken ? null :
                    <Modal3
                        show={true}
                        handleClose={() => navigate("/accounts/login?redirect_to=/board/create")}
                        title={'로그인 경고'}
                        content={'로그인이 필요합니다.!'}
                    />
                }
            </Container>
        </>

    );
};

export default BoardCreate;