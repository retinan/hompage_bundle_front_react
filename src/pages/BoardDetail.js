import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Form, Image} from "react-bootstrap";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import LoadingSpinner from "../components/common/LoadingSpinner";
import Modal2 from "../components/modals/Modal2";
import Cookies from "universal-cookie/es6";
import {UserContext} from "../provider/UserProvider";
import Pagination from "../components/common/Pagination";


const BoardDetail = () => {

    const { user } = useContext(UserContext);

    const cookies = new Cookies()
    const param = useParams()
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(true);
    const [board, setBoard] = useState([]);
    const [comment, setComment] = useState('')
    const [isComment, setIsComment] = useState(false);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [commentId, setCommentId] = useState('');

    const [comments, setComments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    // const [itemsPerPage, setItemsPerPage] = useState(10);
    const itemsPerPage = 10;


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = comments.slice(indexOfFirstItem, indexOfLastItem);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = (comment_id) => {
        setCommentId(comment_id)
        setShow2(true);
    }

    const url = `http://127.0.0.1:8000/api/v1/board/${param.id}/`
    const commentUrl = url + 'comment'


    const accessToken = cookies.get('accessToken')

    const headerConfig = {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    }


    const commentHandler = async (e) => {

        e.preventDefault()

        setIsComment(false)
        setComment('')

        const commentData = {
            content: comment
        }

        try {

            const { data, status } = await axios.post(commentUrl, commentData, headerConfig)

            if (status === 200) {
                setIsComment(true)
                console.log(data)
            }

        } catch (e) {
            console.log(e)
            console.log(e.message)
        }


    }


    const commentDelete = async () => {
        try {

            const { data, status } = await axios.post(commentUrl + `/${commentId}/delete`, {}, headerConfig)
            if (status === 200) {
                console.log(data)
                alert('삭제완료')
                setShow2(false)
            }
        } catch (e) {
            console.log(e.message)
        }
    }

    const boardDelete = async () => {
        try {
            const { data, status } = await axios.delete(url, headerConfig)
            if (status === 204) {
                console.log(data)
                alert('삭제완료')
                navigate('/board')
            }
        } catch (e) {
            console.log(e)
            alert(e.response.data.error)
        }
    }


    useEffect(() => {

        const getBoard = async () => {

            try {

                const { data, status } = await axios.get(url)

                if ( status === 200 ) {
                    console.log(data)
                    setIsLoading(false)
                    setBoard(data)
                    setComments(data.comments)
                }


            } catch (e) {
                setIsLoading(false)
                console.log(e.message)
            }

        }
        getBoard().then()

    }, [url, isComment, show2]);


    return (
        <>
            <Container className="mt-5 py-5">
                <div className="mb-4">
                    <Button variant="outline-primary" className="btn-sm" onClick={() => navigate('/board')}>목록으로</Button>
                </div>
                { isLoading ?
                    <div className="py-3"><LoadingSpinner/></div> :
                    <>
                        <h2 className="mt-4 fs-3-up fw-bolder mt-3 py-3">{ board.title}</h2>
                        <div className="text-end text-secondary">
                            by. { board.user }
                        </div>
                        <hr/>
                        { board.image ? <Image src={board.image} className="w-25"/> : null }
                        <pre className="py-4 lh-base">{board.content}</pre>
                        <hr/>
                        <div className="my-3 d-flex justify-content-end">
                            { user && user.username === board.user ?
                                <>
                                    <Link to={`/board/${board.id}/update`} className="mx-2 btn btn-outline-warning">Update</Link>
                                    <Button className="btn btn-danger" onClick={handleShow}>delete</Button>
                                </>
                                :
                                null
                            }
                        </div>
                        <div className="fs-5 fw-bold py-4">Comments ({board.comments.length})</div>
                        <ol className="mb-5">
                            {
                                comments.length > 0 ?
                                    currentItems.map(
                                        comment =>
                                            <li key={comment.id} className="py-2 d-flex justify-content-between">
                                                <div>
                                                    <span className="text-secondary pe-2">({comment.user})</span>
                                                    - {comment.content}
                                                    { user && user.username === comment.user ?
                                                        <span role="button" className="text-danger" onClick={() => handleShow2(comment.id)}>(delete)</span>
                                                        :
                                                        null
                                                    }
                                                </div>
                                                <div>
                                                    {new Date(comment.created_date).toLocaleDateString(
                                                        "ko-KR",
                                                        {year: "numeric", month: "2-digit", day: "2-digit",}
                                                    )}
                                                </div>

                                            </li>
                                    )
                                :
                                    <li>댓글무</li>
                            }
                        </ol>
                        {comments.length > itemsPerPage ?
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={itemsPerPage}
                                totalItemsCount={comments.length}
                                onChange={handlePageChange}
                            />
                            :
                            null
                        }

                        { user ?
                            <Form onSubmit={commentHandler}>
                                <Form.Group className="mb-3" controlId="formCommentContent">
                                    <Form.Control as="textarea" rows={2} placeholder="Enter Comment" name="content" value={comment} onChange={ e => setComment(e.target.value)}/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                            : null
                        }

                    </>
                }
            </Container>
            <Modal2
                show={show}
                handleClose={handleClose}
                handleEvent={boardDelete}
                content={
                    <div className="py-2">
                        Board Delete? Really??
                    </div>
                }
            />
            <Modal2
                show={show2}
                handleClose={handleClose2}
                handleEvent={commentDelete}
                content={
                    <div className="py-2">
                        Comment Delete? Really??
                    </div>
                }
            />
        </>
    );
};

export default BoardDetail;