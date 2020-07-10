import React from "react";
import {Redirect} from 'react-router-dom'
import {Home} from "../pages";
import {MyChatBot, Kitty, Clock} from "../components"
import AdvancedCounter from "../components/fp/AdvancedCounter";

const routerConfig = [
    { path: '/', exact: true, component: () => <Redirect to="/home"/> },
    { path: '/home', exact: true, component: Home },
    { path: '/chat', exact: true, component: MyChatBot },
    { path: '/cat', exact: true, component: Kitty },
    { path: '/clock', exact: true, component: Clock },
    { path: '/counter', exact: true, component: AdvancedCounter }
]
export default routerConfig