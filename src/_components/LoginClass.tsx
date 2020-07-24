import React, {Component} from "react";
import '../../assets/login.css'
import {connect} from "react-redux";

/*Types*/
const userConstants = {
    LOGIN_REQUEST: 'member/LOGIN_REQUEST',
    LOGIN_SUCCESS: 'member/LOGIN_SUCCESS',
    LOGIN_FAILURE: 'member/LOGIN_FAILURE'
}

/*Actions*/
const userActions = {
    // login, logout, signup, update, remove
}

// export function login(payload) {
//     const type = LOGIN_REQUEST
//     loginService.loginService(payload.userid, payload.password)
//
//     return dispatch =>{
//         dispatch(request(userid))
//     }
//
//     const request = user => { return { type: userConstants.LOGIN_REQUEST, user}}
//     const success = user => { return { type: userConstants.LOGIN_SUCCESS, user}}
//     const failure = user => { return { type: userConstants.LOGIN_FAILURE, user}}
// }


// const initialState = user ? {loggedIn: true, user}:{}
const initialState = {
    userid: '',
    password: '',
    name: '',
    submitted: false
}
/*Reducers*/
export default function userReducers(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            }

        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            }

        case userConstants.LOGIN_FAILURE:
            return {}

        default:
            return state
    }

}

class Login extends Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            userid: '',
            password: '',
            name: '',
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({ submitted: true})
        const {userid, password} = this.state
        if(userid && password){
            this.props.login(userid, password)
        }
    }

    render() {
        const { userid, password, submitted } = this.state
        const helpBlock = { color: "red"}
        return <div>
            <h2>Login Form</h2>
            <form name="form" onSubmit={ this.handleSubmit }>
                <div className="imgcontainer">
                    <img id={"avatar"} src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar"/>
                </div>
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username"
                           name="userid" value={userid}
                           onChange={this.handleChange}
                    />
                    { submitted && !userid &&
                    <div style={helpBlock}>아이디는 필수입력값입니다.</div>
                    }
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password"
                           name="password" value={password}
                           onChange={this.handleChange}
                    />
                    {
                        submitted && !password &&
                        <div style={helpBlock}> 비밀번호는 필수입력값입니다.</div>
                    }
                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked={true} name="remember"/> Remember me
                    </label>
                </div>
                <div className="container">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    }
}
function mapStateToProps(state) {
    const { loggingIn } = state.userReducers
    return { loggingIn}
}
const actionCreators = {
    // login: userActions.login
}
const connectedLoginPage = connect(mapStateToProps, actionCreators)(Login)
export { connectedLoginPage as Login }