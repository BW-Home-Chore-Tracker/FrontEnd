import axios from "axios";
import axiosWithAuth from "../components/axiosWithAuth";

//action.types
export const FETCH_CHORES_START = "FETCH_CHORES_START";
export const FETCH_CHORES_SUCCESS = "FETCH_CHORES_SUCCESS";
export const FETCH_CHORES_FAIL = "FETCH_CHORES_FAIL";
export const ADD_CHORE_SUCCESS = "ADD_CHORE_SUCCESS";
export const ADD_CHORE_START = "ADD_CHORE_START";
export const ADD_CHORE_FAIL = "ADD_CHORE_FAIL"
export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATING_CHORE = "UPDATING_CHORE";
export const EDIT_CHORE_START = "EDIT_CHORE_START";
export const EDIT_CHORE_SUCCESS = "EDIT_CHORE_SUCCESS";
export const EDIT_CHORE_FAIL = "EDIT_CHORE_FAIL";
export const DELETE_CHORE_START = "DELETE_CHORE_START";
export const DELETE_CHORE_SUCCESS = "DELETE_CHORE_SUCCESS";
export const DELETE_CHORE_FAIL = "DELETE_CHORE_FAIL";

export const getChores = () => dispatch => {
    console.log("action");
    dispatch({ type: FETCH_CHORES_START });
    axiosWithAuth()
        .get(`https://chore-tracker-bw.herokuapp.com/chores`)
        .then(res =>
            dispatch({
                type: FETCH_CHORES_SUCCESS,
                payload: res.data
            })
        )

        .catch(err => dispatch({ type: FETCH_CHORES_FAIL, payload: err }));

}
export const addChores = chore => dispatch => {
    dispatch({ type: ADD_CHORE_START });
    axiosWithAuth()
        .post('https://chore-tracker-bw.herokuapp.com/chores', chore)
        .then(res => {
            console.log(res.data);
            dispatch({ type: ADD_CHORE_SUCCESS });
        })
        .catch(err =>
            dispatch({ type: ADD_CHORE_FAIL })
        )

}

export const editChores = (id, chore) => dispatch => {
    //     event.preventDefault();
    console.log("console from editChores")
    dispatch({ type: EDIT_CHORE_START });
    axiosWithAuth()
        .put(`https://chore-tracker-bw.herokuapp.com/chores/${id}`, chore)
        .then(res => {
            console.log("Response from editChores", res)
            dispatch({ type: EDIT_CHORE_SUCCESS })
                .catch(error =>
                    dispatch({ type: EDIT_CHORE_FAIL, payload: error.response })
                );

        })
}

export const deleteChore = id => dispatch => {
    dispatch({ type: DELETE_CHORE_START });
    axiosWithAuth()
        .delete(`/chores/${id}`)
        .then(() => dispatch({ type: DELETE_CHORE_SUCCESS }))
        .catch(err =>
            dispatch({
                type: DELETE_CHORE_FAIL,
                payload: err.response
            })
        );
};
 //clean streaks
 //clean score
// export const toggleChoreEditor = () => dispatch => {
//     console.log('toggle');
//     dispatch({ type: TOGGLE_EDITING })
