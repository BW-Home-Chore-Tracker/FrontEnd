
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as alink } from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Link, NavLink } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
    link: {
        margin: theme.spacing(1),
    },
}));

export default function NavBar() {
    const classes = useStyles();
    const preventDefault = event => event.preventDefault();

    return (
        <Typography>
            <alink href="https://chorechallenge.netlify.com/" onClick={preventDefault} className={classes.link}>
                Home
      </alink>
            <Link to="/login">Login</Link>

            <Link to="/update-children">Update Child</Link>
            <alink to="/chores" onClick={preventDefault} variant="body1" className={classes.link}>
                Chores Challenge List
            </alink>
            <NavLink to="/children">Children</NavLink>
            <Link to="/update-chore">Update Chore</Link>
            <Link to="/logout">Logout</Link>
        </Typography>

    );
}