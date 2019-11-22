import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axiosWithAuth from "./axiosWithAuth";
import updateChildren from "./UpdateChildren";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addChildren } from "../actions/childrenActions";

function Children() {
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

	const classes = useStyles(1); //styling part end

	const [children, setChildren] = useState([
		{
			child_username: "",
			chores: "",
			chore_score: "",
			chore_streak: "",
			role: "",
			parent_id: "35"
		}
	]);

	const handleChanges = e => {
		setChildren({ ...children, [e.target.name]: e.target.value });
		console.log(children);
	};

	const submitForm = e => {
		e.preventDefault();
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		axiosWithAuth()
			.post("https://chore-tracker-bw.herokuapp.com/children", children, {
				headers: { Authorization: token }
			})
			.then(res => {
				console.log(res);
				setChildren(res.data);
			})
			.catch(err => console.log("Check ERROR IN CHILDREN", err));
	}, []);

	return (
		<div className="childForm">
			<form
				onSubmit={submitForm}
				className={classes.container}
				noValidate
				autoComplete="off"
			>
				<div className="formText">
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
						value=""
					/>
				</div>

				<div className="formText">
					<TextField
						id="chores"
						className={classes.textField}
						label="chores"
						margin="normal"
						variant="outlined"
						placeholder="Chores"
						onChange={handleChanges}
						name="chores"
					/>
				</div>

				<div className="formText">
					<TextField
						id="chore_score"
						type="number"
						className={classes.textField}
						label="chore score"
						margin="normal"
						variant="outlined"
						placeholder="Enter chore score "
						onChange={handleChanges}
						name="chore_score"
					/>
				</div>

				<div className="formText">
					<TextField
						id="chore_streak"
						type="number"
						className={classes.textField}
						label="chore streak"
						margin="normal"
						variant="outlined"
						placeholder="Enter chore streak "
						onChange={handleChanges}
						name="chore_streak"
					/>
				</div>

				<div className="formText">
					<TextField
						id="child"
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
					<Link to="/update-children">
						<Button
							variant="contained"
							className={classes.button}
							type="submit"
						>
							Add
						</Button>
					</Link>
				</div>
			</form>
		</div>
	);
}
const mapStateToProps = state => ({
	children: state.children,
	error: state.error
});
export default connect(mapStateToProps, { addChildren })(Children);
