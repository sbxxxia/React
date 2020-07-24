import React, {Component} from 'react'

export default class Clock extends Component {
    public state = {time: ''}
    public tick = () => {
        setInterval(this.tick, 1000)
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }
    componentWillMount() {
        this.tick()
    }
    public render() {
        return <div>
            <h2>현재 시각은 {this.state.time}입니다.</h2>
            <button onClick={this.tick}>클릭</button>
        </div>
    }
}