import React, { useState, useEffect } from "react";
import axios from "axios";
import ChildCard from "./ChildCard";

function ChildrenList() {
	const [kids, setKids] = useState([]);

	useEffect(() => {
		const token = localStorage.getItem("token");
		axios
			.get("https:/chore-tracker-bw.herokuapp.com/children", {
				headers: { Authorization: token }
			})

			.then(res => {
				setKids(res.data);
				console.log(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			{kids.map(kid => (
				<ChildCard
					key={kid.child_id}
					child_username={kid.child_username}
					chore={kid.chores}
					chore_score={kid.chore_score}
					chore_streak={kid.chore_streak}
					parent_id={kid.parent_id}
				/>
			))}
		</div>
	);
}

export default ChildrenList;
