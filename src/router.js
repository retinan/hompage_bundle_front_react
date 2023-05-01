import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {Home, Board, BoardDetail, Scrollspy, BoardCreate, BoardUpdate, Login, Signup} from "./pages";
// import AuthRoute from "./components/auth/AuthRoute";


const router = createBrowserRouter([
        {
            path:'/',
            element: <Home/>
        },
        {
            path:'/accounts/signup',
            element: <Signup/>
        },
        {
            path:'/accounts/login',
            element: <Login/>
        },
        {
            path:'/board',
            element: <Board/>
        },
        {
            path:'/board/:id',
            element: <BoardDetail/>
        },
        {
            path:'/board/create',
            element: <BoardCreate/>
        },
        {
            path:'/board/:id/update',
            element: <BoardUpdate/>
        },
        {
            path:'/scrollspy',
            element: <Scrollspy/>
        },

    ]
)

export default router;