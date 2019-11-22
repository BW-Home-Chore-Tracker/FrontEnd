import React, { useState, useEffect } from 'react'
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import ChoreCard from "./ChoreCard";

export default function Chores() {
    const [chores, setChores] = useState([])

    useEffect(() => {
        axios.get('https://chore-tracker-bw.herokuapp.com/chores')
            .then(response => {
                console.log(response);
                setChores(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const addChore = e => {
        e.preventDefault();
        setChores([...chores, { name: "", chore_score: "", due_date: "", completed: "" }]);
    };

    // Styling form

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
    const classes = useStyles(1);

    return (
        <div>
            
         {chores.map(chore  => (
          <ChoreCard  
          key={chore.chore_id} 
          name={chore.name}
          chore_score={chore.chore_score}
          due_date={chore.due_date}
          completed={chore.completed}
          />
          )
        )}



            <form name="choreForm" className={classes.container} noValidate autoComplete="off" onSubmit={validateForm} >
                <div className={classes.form}>
                    <div>
                        <TextField
                            required
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
                        {/* <TextField
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
                    /> */}
                    </div>
                    <div>
                        {/* <TextField
                            id="childs_name"
                            className={classes.textField}
                            label="Child's Name"
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                    /> */}
                    </div>
                    <div>
                        <TextField
                            required
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
                            required
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
                    <div>
                        <Checkbox
                            required
                            name="completed"
                            color="primary"
                            inputProps={{
                                'aria-label': 'secondary checkbox',
                            }}
                        /> Completed
                    </div>
                    <Button variant="contained" className={classes.button} >
                        Add Chore
                    </Button>
                </div>
            </form>
            
        </div>
    )
}


function validateForm() {
    const x = document.forms["choreForm"]["name"].value;
    if (x === "") {
        alert("Name must be filled out");
        return false;
    }
}
