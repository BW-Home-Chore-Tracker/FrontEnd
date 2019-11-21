import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addChores } from "../actions/actions";
import axiosWithAuth from './axiosWithAuth';
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


const UpdateChoresForm = props => {
    const [choreScore, setChoreScore] = useState();
    const [chores, setChores] = useState({
        id: new Date(),
        name: "",
        due_date: "",
        created: "",
        completed: false,
        editing: false
    })


    const classes = useStyles();


    const deleteItem = e => {
        e.preventDefault();
        axiosWithAuth()
            .delete(`https://chore-tracker-bw.herokuapp.com/chores/:id`)
            .then(res => {
                //console.log(res))
                props.updateItems(res.data);
                props.history.push("/item-list");
            })
            .catch(err => console.log(err));
    };
    const handleScore = e => {
        const scores = choreScore.filter(chore => chores.completed === !chores.completed)
        setChoreScore(scores.legnth * 10)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: new Date(),
            name,
            due_date,
            created,
            completed: false,
            editing: false
        }
        const name = this.getName.value;
        const due_date = data.id.setDate(data.id.getDate() + 5);
        const created = Date.now();
        console.log(data)

    }


    return (


        <form className={classes.container} noValidate autoComplete="off">

            <div className={classes.form}>
                <div>
                    <TextField
                        id="name"
                        className={classes.textField}
                        label="Chore Name"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="description"
                        className={classes.textField}
                        multiline
                        label="Chore Description"
                        type="textarea"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}

                    />
                </div>
                <div>
                    <TextField
                        id="childs_name"
                        className={classes.textField}
                        label="Child's Name"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="chore_score"
                        className={classes.textField}
                        label="Chore Score"
                        type="number"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div>
                    <TextField
                        id="due_date"
                        label="Due Date"
                        className={classes.textField}
                        type="date"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            </div>
        </form>



    )
}

export default UpdateChoresForm;