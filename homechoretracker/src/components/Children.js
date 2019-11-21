import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axiosWithAuth from "./axiosWithAuth";

export default function Children() {
	
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
            child_username: "",
            child_password:"",
			child_id: "",
			parent_id: "",
			chore_score: "",
			chore_streak: "",
			role: "child"
		}
	]);
// console.log(children)
	useEffect(() => {
		axiosWithAuth()
			.get('https://chore-tracker-bw.herokuapp.com/children/')
			.then(res => {
				console.log(res);
				setChildren(res.data);
			})
			.catch(err => console.log("Check ERROR IN CHILDREN", err));
	}, []);

	const handleChanges = e => {
		setChildren({ ...children, [e.target.name]: e.target.value });
		console.log("CHILDREN VALUE",children);
	};
	const submitForm = e => {
		e.preventDefault();
		
	};

	return (
		<>
		<form
			onSubmit={submitForm}
			className={classes.container}
			noValidate
			autoComplete="off"
		>
			<div>
				<TextField
                    id="child_username"
                    name='child_username'
					required
					className={classes.textField}
					label="child username"
					margin="normal"
					variant="outlined"
					placeholder="Enter child's username "
					onChange={handleChanges}
					value={children.child_username}
				/>
			</div>

			<div>
				<TextField
                    id="child_password"
                    name='child_password'
					type="password"
					required
					className={classes.textField}
					label="child password"
					margin="normal"
					variant="outlined"
					placeholder="Enter child password "
					onChange={handleChanges}
					value={children.child_password}
				/>
			</div>

			<div>
				<TextField
                    id="chore_score"
                    name='chore_score'
					className={classes.textField}
					label="chore score"
					margin="normal"
					variant="outlined"
					placeholder="Enter chore score "
					onChange={handleChanges}
					type='number'
					// value={children.chore_score}
				/>
			</div>

			<div>
				<TextField
                    id="chore_streak"
                    name='chore_streak'
					className={classes.textField}
					label="chore streak"
					margin="normal"
					variant="outlined"
					placeholder="Enter chore streak "
					onChange={handleChanges}
					type='number'
					// value={children.chore_streak}
				/>
			</div>

			<div>
				<TextField
                    id="outlined-read-only-input"
                    name='role'
					label="Read Only"
					defaultValue="child"
					className={classes.textField}
					margin="normal"
					InputProps={{
						readOnly: true
					}}
					variant="outlined"
				/>
			</div>

			<div>
				<Button variant="contained" className={classes.button} type="submit">
					Add
				</Button>
			</div>
		</form>
		</>
	);
}
