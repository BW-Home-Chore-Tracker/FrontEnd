import React, { Component } from 'react';

class UpdateChoresForm extends Component {


    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const due_date = id.setDate(id.getDate() + 5);
        const created = Date.now();

        const data = {
            id: new Date(),
            name,
            due_date,
            created,
            completed: false,
            editing: false
        }
        console.log(data)

    }
    render() {
        return (
            <div>
                <h1>Add Chore</h1>
                <form>
                    <input required type="text" />
                    <input type="text"
                        {/* <button onClick={()=>thisprops.dispatch(type:'EDIT_CHORE',chore)} */}
                        {/* <button onClick={() =>this.props.dispatch({type:'DELETE_CHORE', id:this.props.chore.id})}>Delete Chore</button> */}
                </form>
            </div>
                )
            }
        }
export default UpdateChoresForm;