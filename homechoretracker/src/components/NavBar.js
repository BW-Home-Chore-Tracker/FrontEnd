
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Link as Alink } from '@material-ui/core/Link';
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
            <a href="https://chorechallenge.netlify.com/">
                Home
      </a>
            <Link to="/login">Login</Link>

            <Link to="/update-children">Update Child</Link>
            <Link to="/chores">
                Chores Challenge List
            </Link>
            <NavLink to="/children">Children</NavLink>
            <NavLink to="/childlist">ChildrenList</NavLink>
            <Link to="/update-chore">Update Chore</Link>
            <Link to="/logout">Logout</Link>
        </Typography>

    );
}