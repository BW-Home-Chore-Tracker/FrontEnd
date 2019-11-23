import React from "react";

function ChildCard(props) {
	return (
		<div className="mainCardCont">
			<div className="cardCont">
				<h3>Child's Name: {props.child_username}</h3>
				<p className="textCont">Chores:{props.chores}</p>
				<p className="textCont">Chore score: {props.chore_score}</p>
				<p className="textCont">Chore streak: {props.chore_streak}</p>
				<p className="textCont">Parent id: {props.parent_id}</p>
			</div>
		</div>
	);
}

export default ChildCard;
