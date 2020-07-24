import React, {useState} from "react";
import {MDBBtn, MDBInput} from "mdbreact";

/*Commands*/ /*액션과 리듀서를 연결*/
const joinConstants = {
    JOIN_REQUEST: 'USER_JOIN_REQUEST',
    JOIN_SUCCESS: 'USER_JOIN_SUCCESS',
    JOIN_FAILURE: 'USER_JOIN_FAILURE'
}

/*Reducers*/
function joinReducer(payload, userActions){
    switch (userActions) {
        case joinConstants.JOIN_REQUEST:
            return {
                signUp: true,
                user: userActions.user
            }

        case joinConstants.JOIN_SUCCESS:
            return {
                signUp: true,
                user: userActions.user
            }

        case joinConstants.JOIN_FAILURE:
            return {
                signUp: true,
                user: userActions.user
            }
    }

    const action = (type, user) => {
        switch (type) {
            case joinConstants.JOIN_REQUEST:
                return { type: type, user }
            case joinConstants.JOIN_SUCCESS:
                return { type: type, user }
            case joinConstants.JOIN_FAILURE:
                return { type: type, user }
        }
    }
}

/* Actions */
const joinActions = {
    join
}

function join(e) {
    return dispatch => {

    }
}

/* MiddleWare */
function joinService() {
    const userid = ''
    const password = ''
    const name = ''
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userid,password,name})
    }
    return fetch(`https://facebook.github.io/react-native/movies.json`, requestOptions)
        .then()
}

/* Component */ /*컨테이너*/
const signUp = () => {
    const [userid, setUserid] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    return (
        <div>
            <form name={"form"}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>

                    <label htmlFor="email"><b>ID</b></label>
                    <input type="text" placeholder="Enter ID"
                           name="userid" value={userid}
                           onChange={e=>setUserid(e.target.value)}
                    />
                    <label htmlFor="psw"><b>PW</b></label>
                    <input type="password" placeholder="Enter Password"
                           name="password" value={password}
                           onChange={e=>setPassword(e.target.value)}
                    />

                    <label htmlFor="psw-repeat"><b>NAME</b></label>
                    <input type="password" placeholder="Enter Name"
                           name="name" value={name}
                           onChange={e=>setName(e.target.value)}
                    />


                    <p>By creating an account you agree to our <a href="#">Terms
                        & Privacy</a>.</p>

                    <div className="clearfix">
                        <MDBBtn gradient="peach">Cancel</MDBBtn>
                        <MDBBtn onClick={signUp} className={"button3"}>Sign Up</MDBBtn>
                    </div>
                </div>
            </form>
        </div>
    )
}