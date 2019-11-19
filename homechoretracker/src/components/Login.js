import React from 'react';

import axiosWithAuth from "./axiosWithAuth";
class Login extends React.Component {
    state = {

        username: "",
        password: "",

    }

    handleChange = e => {
        this.setState({

            ...this.state,
            [e.target.name]: e.target.value
        });

    };
    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("users/login", this.state)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected');
            })
            .catch(err => console.log(err));
    };
    render() {
        return (
            <>
                <h1>Welcome to Home Chore Tracker</h1>
                <form onSubmit={this.login}>
                    <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
                    <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                    <button>Log in</button>
                </form>
            </>
        )

    }

}
export default Login;