import React, { Component } from 'react';

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn : false};
    }

    handleLoginClick() {
        window.console.log("got to login click");
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
                <h1>User is currently {isLoggedIn ? 'logged in' : 'not logged in.'}</h1>
            </div>
        )
    }


}

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
          Login
      </button>
    );
}

function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
          Logout
      </button>
    );
}

function UserGreeting(props) {
    return <h1>Hello Boss.</h1>;
}

function UserLogin(props) {
    return <h1>Please log in</h1>;
}

function Greeting(props) {
    const isLogged = props.isLoggedIn;
    if(isLogged) {
        return <UserGreeting/>;
    }
    return <UserLogin/>;
}

export default LoginControl;