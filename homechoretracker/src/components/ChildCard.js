import React from'react';


function ChildCard(props){

    return(
        <div>
            <h3>{props.child_username}</h3>
            <p>{props.chore_score}</p>
            <p>{props.chore_streak}</p>
            <p>{props.parent_id}</p>
        
        </div>
    )
};

export default ChildCard

