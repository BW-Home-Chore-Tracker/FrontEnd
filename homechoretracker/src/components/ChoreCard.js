import React from "react";

const ChoreCard = props => {
    return (
      <div class="chore-container">
        {props.chores.map((chore, index) => (
          <div key={index}>
            <h2>{`Chore Name: ${chore.name}`}</h2>
            <p>{`Chore Score: ${chore.chore_score}`}</p>
            <p>{`Due Date: ${chore.due_date}`}</p>
            <p>{`Completed: ${chore.completed}`}</p>
          </div>
        ))}
      </div>
    );
  };
  export default ChoreCard;