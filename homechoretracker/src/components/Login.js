import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { connect } from 'react-redux';
import { doSignIn } from '../actions/authActions';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300,
    },
    button: {
        margin: theme.spacing(1),
        width: 150,
    },
    input: {
        display: 'none',
    },
}));

const Login = props => {
    const [user, setUser] = useState({ username: "", password: "" })

    const login = e => {
        e.preventDefault();
        console.log(user)
        props.doSignIn(user);
        this.props.history.push("/children");


    };
    const handleChange = e => {
        setUser({

            ...user,
            [e.target.name]: e.target.value
        });

    };
    const handleSubmit = e => {
        e.preventDefault();
        axios.post('https://chore-tracker-bw.herokuapp.com/users/login', user)
            .then(response => {
                localStorage.setItem("token", response.data.token);

            })


    }

    const classes = useStyles();
    return (
        <div>
            <h1>Welcome to Home Chore Tracker</h1>
            <form className={classes.container} noValidate autoComplete="off">

                <div>
                    <TextField
                        id="username"
                        className={classes.textField}
                        label="Username"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange}
                        name="username"

                    />
                </div>
                <div>
                    <TextField
                        id="password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange}
                        name="password"
                    />
                </div>
                <Button variant="contained" className={classes.button} onClick={login}>
                    LOG IN
                </Button>
            </form>
        </div>
    )

}

const mapStateToProps = state => ({ user: state.user, error: state.error });
export default connect(mapStateToProps, { doSignIn })(Login);