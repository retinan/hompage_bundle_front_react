import React, {useContext, useEffect, useState} from 'react';
import {Badge, Button, Container} from "react-bootstrap";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import LoadingSpinner from "../components/common/LoadingSpinner";
import Pagination from "../components/common/Pagination";
import Modal3 from "../components/modals/Modal3";
import {UserContext} from "../provider/UserProvider";
import { useTranslation } from 'react-i18next';


const Board = () => {

    const { t } = useTranslation()

    const { user } = useContext(UserContext);

    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const eventHandle = () => navigate("/accounts/login?redirect_to=/board/create");
    const handleShow = () => setShow(true);

    const [isLoading, setIsLoading] = useState(true);
    const [boards, setBoards] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const url = `http://127.0.0.1:8000/api/v1/board/?page=${currentPage}`

    useEffect(() => {
        // board 리스트 가져오기
        const getBoards = async () => {
            try {
                const { data, status } = await axios.get(url)
                if (status === 200) {
                    setIsLoading(false)
                    setBoards(data.results)
                }
            } catch (e) {
                setIsLoading(false)
                console.log(e.message)
                console.log(e)
            }
        }
        getBoards().then()

    }, [url, currentPage]);

    return (
        <Container className="mt-5 py-5">

            <div className="mt-4 d-flex justify-content-between">
                <h2 className="fs-3-up fw-bolder">{ t("board") } { t("list") }</h2>
                { user ?
                    <Link to='/board/create' className="w-25 btn btn-primary fw-bolder d-flex justify-content-center align-items-center">{ t("write") }</Link>
                    :
                    <Button variant="primary" onClick={handleShow} className="w-25 btn fw-bolder d-flex justify-content-center align-items-center">{ t("write") }</Button>
                }

            </div>

            { isLoading ?
                <div className="pt-5">
                    <LoadingSpinner/>
                </div>
                :
                <>
                    <ul className="mt-3 py-5">
                        {boards && boards.map(
                            board =>
                            <li key={board.id} className="py-3 fw-bold border-bottom">
                            <Link to={`/board/${board.id}`}>
                                <div className={"d-sm-flex justify-content-between align-items-center"}>
                                    <div className={"fs-4 flex-nowrap lh-base "}>
                                        {board.title}
                                        { board.comments.length > 0 ? <Badge bg="primary" className="ms-2 fs-6">{board.comments.length}</Badge> : null}
                                    </div>
                                    <div className={"ps-sm-5 pt-2 pt-sm-0 fs-6 text-secondary fw-normal flex-shrink-0"}>
                                        {new Date(board.created_date).toLocaleDateString(
                                            "ko-KR",
                                            {year: "numeric", month: "2-digit", day: "2-digit",}
                                        )}
                                    </div>
                                </div>
                            </Link>
                            </li>
                        )}
                    </ul>
                    <div className="my-3 d-flex justify-content-center">
                        <Pagination
                            className="my-3"
                            size="lg"
                            activePage={currentPage}
                            itemsCountPerPage={itemsPerPage}
                            totalItemsCount={boards.count}
                            onChange={handlePageChange}
                        />
                    </div>

                    <Modal3
                        show={show}
                        handleClose={handleClose}
                        eventHandle={eventHandle}
                        title={'로그인 경고'}
                        content={'로그인이 필요합니다.!'}
                    />
                </>
            }
        </Container>
    );
};

export default Board;