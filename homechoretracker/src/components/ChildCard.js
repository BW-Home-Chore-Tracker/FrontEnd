import React from'react';


function ChildCard(props){

    return(
        <div>
            <h3>Child's Name: {props.child_username}</h3>
            <p>Chore score: {props.chore_score}</p>
            <p>Chore streak: {props.chore_streak}</p>
            <p>Parent id: {props.parent_id}</p>
        
        </div>
    )
};

export default ChildCard

