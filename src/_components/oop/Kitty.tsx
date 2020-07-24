import React, {Component} from "react";

class Kitty extends Component<any, any>{
    public formatDate(date) {
        return date.toLocaleDateString();
    }

    public state = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
            name: 'Hello Kitty',
            avatarUrl: 'https://placekitten.com/g/64/64',
        }
    }

    public render() {
        return (
            <div className="Comment">
                <div className="UserInfo">
                    <img
                        className="Avatar"
                        src={this.state.author.avatarUrl}
                        alt={this.state.author.name}
                    />
                    <div className="UserInfo-name">
                        {this.state.author.name}
                    </div>
                </div>
                <div className="Comment-text">{this.state.text}</div>
                <div className="Comment-date">
                    {this.formatDate(this.state.date)}
                </div>
            </div>
        );
    }
}
export default Kitty