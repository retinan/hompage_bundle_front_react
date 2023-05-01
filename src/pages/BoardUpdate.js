import React, {useEffect, useState} from 'react';
import {Button, Container, Form, Image} from "react-bootstrap";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Cookies from "universal-cookie/es6";

const BoardUpdate = () => {

    const cookies = new Cookies()
    const navigate = useNavigate()
    const params = useParams()

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [isImageDelete, setIsImageDelete] = useState(false);
    const [newImage, setNewImage] = useState('');

    const url = 'http://127.0.0.1:8000/api/v1/board/'
    const getUrl = `${url}${params.id}/`

    useEffect(() => {
        const getBoard = async () => {
            try {
                const { data, status } = await axios.get(getUrl)
                if (status === 200) {
                    setTitle(data.title)
                    setContent(data.content)
                    setImage(data.image)
                }
            } catch (e) {
                console.log(e.message)
            }
        }
        getBoard().then();
    }, [getUrl]);


    const updateHandler = async (e) => {

        e.preventDefault()

        const updateData = {
            title,
            content,
            image: newImage,
            isImageDelete,
        }

        const accessToken = await cookies.get('accessToken')

        const headerConfig = {
            headers: {
                'Content-Type':"multipart/form-data",
                'Authorization': 'Bearer ' + accessToken
            }
        }

        try {

            const { data, status } = await axios.patch(getUrl, updateData, headerConfig)

            if (status === 200) {
                navigate(`/board/${params.id}`)
                console.log(data)
            }

        } catch (e) {
            console.log(e.message)
        }

    }

    return (
        <>
            <Container className="mt-5 py-5">
                <div className="mb-4">
                    <Button variant="outline-primary" className="btn-sm" onClick={() => navigate(-1)}>Back</Button>
                </div>
                <h2 className="mt-4 fs-3-up fw-bolder">Board Update</h2>
                <Form onSubmit={updateHandler} className="py-5">
                    <Form.Group className="mb-3" controlId="formBoardTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" name="title" value={title} onChange={ e => setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBoardContent">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Enter Content" name="content" value={content} onChange={ e => setContent(e.target.value)}/>
                    </Form.Group>
                    { image
                        ?
                        <div className="d-flex align-items-center">
                            <Image src={image} className="w-25"/>
                            <Form.Group>
                                <Form.Check type="checkbox" label="delete" onChange={ e => setIsImageDelete(e.target.checked)} />
                            </Form.Group>
                        </div>
                        : null
                    }
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" name="image" onChange={ e => setNewImage(e.target.files[0])}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>

    );
};

export default BoardUpdate;