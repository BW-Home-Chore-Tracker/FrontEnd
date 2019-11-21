
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

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
            <Link href="https://chorechallenge.netlify.com/" onClick={preventDefault} className={classes.link}>
                Home
      </Link>
            <Link to="/children" onClick={preventDefault} className={classes.link}>
                Children
            </Link>
            <Link to="/chores" onClick={preventDefault} variant="body1" className={classes.link}>
                Chores Challenge List
            </Link>
            <Link to="/logout">Logout</Link>
        </Typography>

    );
}