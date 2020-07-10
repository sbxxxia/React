import React from "react";
import {Redirect} from 'react-router-dom'
import {Home} from "../pages/home";
import {} from "../components"

const routerConfig = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/home"/>
    },
    {
        path: '/home',
        exact: true,
        component: Home
    }
]
export default routerConfig