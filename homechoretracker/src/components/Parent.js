import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { doCreateAccount } from '../actions/authActions';


// Form and form styling
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
    },
    input: {
        display: 'none',
    },
}));

const Parent = props => {
    const [user, setUser] = useState({});

    const register = e => {
        e.preventDefault();
        console.log(user)
        props.doCreateAccount(user);
        props.history.push('/children')


    }
    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const classes = useStyles();

    return (
        <form className={classes.container} noValidate autoComplete="off">

            <div className={classes.form}>
                {/* <div>
                    <TextField
                        id="first_name"
                        className={classes.textField}
                        label="Name"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange}
                        name="first_name"

                    />
                </div> */}
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
                {/* <div>
                    <TextField
                        id="email"
                        className={classes.textField}
                        label="Email"
                        type="email"
                        margin="normal"
                        variant="outlined"
                        onChange={handleChange}
                        name="email"


                    />
                </div> */}
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
                <Button variant="contained" className={classes.button} onClick={register}>
                    Sign Up
                </Button>



            </div>
        </form>
    )
}
const mapStateToProps = state => ({ user: state.user, error: state.error });
export default connect(mapStateToProps, { doCreateAccount })(Parent);



