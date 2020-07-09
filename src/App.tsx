import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, MyChatBot } from './components';
import './App.css';
import {Clock, Counter, Hello, Kitty} from './oop';

class App extends React.Component<any, any>{
  public render(){
    return  <Router>
      <Link to="/">홈으로 이동</Link> <br/>
      <Link to="/chat">챗봇 이동</Link> <br/>
      <Link to="/counter">카운터</Link> <br/>
      <Link to="/hello">헬로우</Link> <br/>
      <Link to="/clock">시계</Link> <br/>
      <Link to="/kitty">고양이</Link> <br/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/chat' component={MyChatBot}/>
      <Route exact path='/counter'>
        <Counter startNumber={0}/>
      </Route>
      <Route exact path='/hello'>
        <Hello myName={"홍길동"}/>
      </Route>
      <Route exact path='/clock' component={Clock}/>
      <Route exact path='/kitty' component={Kitty}/>
    </Router>
  }
}

export default App;