import React from "react";

function ChoreCard (props) {
    return (
      <div className="chore-container">
        {/* {chores.map((chore, index) => ( */}
          <div >
            <h2>{`Chore Name: ${props.name}`}</h2>
            <p>{`Chore Score: ${props.chore_score}`}</p>
            <p>{`Due Date: ${props.due_date}`}</p>
            <p>{`Completed: ${props.completed}`}</p>
          </div>
        {/* ))} */}
      </div>
    );
  };
  export default ChoreCard;