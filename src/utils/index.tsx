import React from "react";
import {Redirect} from 'react-router-dom'
import {Home} from "../progress";
import {MyChatBot, Kitty, Clock} from "../_components"
import AdvancedCounter from "../_components/fp/AdvancedCounter";

const routerConfig = [
    { path: '/', exact: true, component: () => <Redirect to="/home"/> },
    { path: '/home', exact: true, component: Home },
    { path: '/chat', exact: true, component: MyChatBot },
    { path: '/cat', exact: true, component: Kitty },
    { path: '/clock', exact: true, component: Clock },
    { path: '/counter', exact: true, component: AdvancedCounter }
]
export default routerConfig