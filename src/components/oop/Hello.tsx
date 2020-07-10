import React, {Component} from "react";

interface HelloProps {
    myName: string
}
class Hello extends Component<HelloProps>{
    public state = {name: ""}
    props: any

    constructor(props: HelloProps) {
        super(props)
        this.state.name = props.myName
    }
    public handleClick = () => {
        this.setState({
            name: `안녕 ${this.props.myName}`
        })
    }
    public render() {
        return <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.handleClick}>Click Me</button>
        </div>
    }

}
export default Hello