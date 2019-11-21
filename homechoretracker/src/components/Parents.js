import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { addChildren } from '../actions/childrenActions';


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

const Parents = props => {
    const addChild = e => {
        e.preventDefault();
        props.addChildren();
    }
    const classes = useStyles();

    return (
        <form className={classes.container} noValidate autoComplete="off">

            <div className={classes.form}>
                <div>
                    <TextField
                        id="name"
                        className={classes.textField}
                        label="Name"
                        margin="normal"
                        variant="outlined"

                    />
                </div>
                <div>
                    <TextField
                        id="username"
                        className={classes.textField}
                        label="Username"
                        margin="normal"
                        variant="outlined"

                    />
                </div>
                <div>
                    <TextField
                        id="email"
                        className={classes.textField}
                        label="Email"
                        type="email"
                        margin="normal"
                        variant="outlined"


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
                    />
                </div>
                <Button variant="contained" className={classes.button} onClick={addChild}>
                    Sign Up
                </Button>
            </div>
        </form>
    )
}
const mapStateToProps = state => ({ user: state.user, error: state.error });
export default connect(mapStateToProps, { addChildren })(Parents);


