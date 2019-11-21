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

	const classes = useStyles();

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

	useEffect(() => {
		axiosWithAuth()
			.get("https://chore-tracker-bw.herokuapp.com/children")
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
		props.addChildren(children);
	}
	const submitForm = e => {
		e.preventDefault();
		setChildren([...children]);
	};

	return (

		<form
			onSubmit={submitForm}
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
					onChange={handleChanges}
					name="username"
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
					placeholder="Enter Family Password "
					onChange={handleChanges}
					name="family_password"
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
				<Button variant="contained" className={classes.button} type="submit" onClick={addChild}>
					Add
				</Button>
			</div>
		</form>

	);
}
const mapStateToProps = state => ({ children: state.children, error: state.error });
export default connect(mapStateToProps, { addChildren })(Children);