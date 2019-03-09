import React, { Component } from 'react';

class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date : new Date(),
            isToggleOn: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
        <div>
            <h1>Hello, {this.props.name} </h1>
            <h2>It is now {this.state.date.toLocaleTimeString()}</h2>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON':'OFF'}
            </button>
        </div>
        )
    }
}

export default Welcome;