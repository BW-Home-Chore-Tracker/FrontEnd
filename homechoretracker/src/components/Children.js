import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axiosWithAuth from "./axiosWithAuth";
import updateChildren from './UpdateChildren';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addChildren } from '../actions/childrenActions';

function Children(props) {

	//styling
	console.log('PROPS',props)
	const useStyles = makeStyles(theme => ({
		container: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			flexWrap: "wrap"
		},

		textField: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			width: 200
		},

		button: {
			margin: theme.spacing(1),
			width: "10%"
		},

		input: {
			display: "none"
		}
	}));

	const classes = useStyles(1);

	const [children, setChildren] = useState([
		{
			child_username: "",
			child_id: "",
			parent_id: "",
			chore_score: "",
			chore_streak: "",
			role: ""
		}
	]);

	useEffect(() => {
		const token = localStorage.getItem('token');
		axios.get("https://chore-tracker-bw.herokuapp.com/children",{
		headers:{Authorization: token}	
		})
			.then(res => {
				console.log(res);
				setChildren(res.data);
			})
			.catch(err => console.log("Check ERROR IN CHILDREN", err));
	}, []);


	const handleChanges = e => {
		setChildren({ ...children, [e.target.name]: e.target.value });
		console.log(children);
	};
	const addChild = e => {
		e.preventDefault();
		// props.addChildren(children);
	}

	function validateForm() {
		var x = "child_name";
		if (x === "") {
		  alert("Name must be filled out");
		  return false;
		}
	  }

	const submitForm = e => {
		e.preventDefault();
		e.validateForm();

	};

	return (
<>
		<form
			onSubmit={submitForm}
			className={classes.container}
			noValidate
			autoComplete="off">
			<div>
				<TextField
					id="child_username"
					required
					className={classes.textField}
					label="Child username"
					margin="normal"
					variant="outlined"
					placeholder="Enter child username "
					onChange={handleChanges}
					name="child_username"
					
				/>
			</div>

			<div>
				<TextField
					id="child_password"
					required
					className={classes.textField}
					label="child_password"
					margin="normal"
					variant="outlined"
					placeholder="Enter child password "
					onChange={handleChanges}
					name="child_password"
				/>
			</div>

			<div>
				<TextField
					id="chore_score"
					className={classes.textField}
					label="chore score"
					margin="normal"
					variant="outlined"
					placeholder="Enter chore score "
					onChange={handleChanges}
					name="chore_score"
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
					name="chore_streak"
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
				<Link to="/update-children">
					<Button variant="contained" className={classes.button} type="submit" onClick={addChild}>
						Add
				</Button>
				</Link>
			</div>
		</form>

</>
	);
}
const mapStateToProps = state => ({ children: state.children, error: state.error });
export default connect(mapStateToProps, { addChildren })(Children);