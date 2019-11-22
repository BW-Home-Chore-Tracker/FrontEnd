import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { saveEdit, deleteChildren } from "../actions/childrenActions";
import axiosWithAuth from "./axiosWithAuth";
import { connect } from 'react-redux';
import { DELETE_CHILDREN_START, DELETE_CHILDREN_SUCCESS, DELETE_CHILDREN_FAIL } from "../actions/childrenActions";

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


const UpdateChildren = props => {

    const [children, setChildren] = useState([
        {
            child_name: "",
            child_id: "",
            parent_id: "",
            chore_score: "",
            chore_streak: "",
            role: ""
        }
    ]);



    const handleChanges = e => {
        setChildren({ ...children, [e.target.name]: e.target.value });
        console.log(children);
    };
    const updateChildren = e => {
        e.preventDefault();
        props.saveEdit(children);
    };

    const deleteChildren = id => dispatch => {
        dispatch({ type: DELETE_CHILDREN_START });
        axiosWithAuth()
            .delete(`http://chore-tracker-bw.herokuapp.com/children/${id}`)
            .then(res =>
                dispatch({ type: DELETE_CHILDREN_SUCCESS, payload: id })
                    .catch(err => dispatch({ type: DELETE_CHILDREN_FAIL, payload: err.response })
                    )
            )
    }
    const classes = useStyles();
    return (
        <form

            className={classes.container}
            noValidate
            autoComplete="off">
            <div>
                <TextField
                    id="child_name"
                    required
                    className={classes.textField}
                    label="Child's name"
                    margin="normal"
                    variant="outlined"
                    placeholder="Enter child's name "
                    name="child_name"
                    onChange={handleChanges}
                />
            </div>

            <div>
                <TextField
                    id="family_password"
                    required
                    className={classes.textField}
                    label="family password"
                    margin="normal"
                    variant="outlined"
                    placeholder="Enter Family Password"
                    name="family_password"
                    onChange={handleChanges}
                />
            </div>

            <div>
                <TextField
                    id="chore_score"
                    className={classes.textField}
                    label="chore score"
                    margin="normal"
                    variant="outlined"
                    placeholder="Enter chore score"
                    name="chore-score"
                    onChange={handleChanges}
                />
            </div>
            <div>
                <TextField
                    id="bonus_points"
                    className={classes.textField}
                    label="bonus_points"
                    margin="normal"
                    variant="outlined"
                    placeholder="Enter bonus points"
                    name="bonus_points"
                    onChange={handleChanges}
                />
            </div>

            <div>
                <TextField
                    id="chore_streak"
                    className={classes.textField}
                    label="chore streak"
                    margin="normal"
                    variant="outlined"
                    placeholder="Enter chore streak "
                    onChange={handleChanges}
                />
            </div>

            <div>
                <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Child"
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                        readOnly: true
                    }}
                    variant="outlined"
                />
            </div>

            <div>
                <Button onClick={saveEdit}> EDIT	</Button>
                <Button variant="contained" className={classes.button} onClick={deleteChildren}>
                    DELETE
				</Button>

            </div>
        </form>
    );
};
const mapStateToProps = state => ({ children: state.children, error: state.error });
export default connect(mapStateToProps, { saveEdit, deleteChildren })(UpdateChildren);


