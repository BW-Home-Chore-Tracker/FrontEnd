import axios from "axios";
import axiosWithAuth from "../components/axiosWithAuth";

//action.types
export const FETCH_CHORES_START = "FETCH_CHORES_START";
export const FETCH_CHORES_SUCCESS = "FETCH_CHORES_SUCCESS";
export const FETCH_CHORES_FAIL = "FETCH_CHORES_FAIL";
export const ADD_CHORE = "ADD_CHORE";
export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATING_CHORE = "UPDATING_CHORE";
export const EDIT_CHORE = "EDIT_CHORE";
export const DELETE_CHORE = "DELETE_CHORE";

export const getChores = () => dispatch => {
    console.log("action");
    dispatch({ type: FETCH_CHORES_START });
    axiosWithAuth()
        .get(`/chores`)
        .then(res =>
            dispatch({
                type: FETCH_CHORES_SUCCESS,
                payload: res.data
            })
        )
        .catch(err => dispatch({ type: FETCH_CHORES_FAIL, payload: err }));

}
export function addChores(id, allChores) {
    return dispatch => {
        axiosWithAuth()
            .post("/chores/:id", { id, allChores })
            .then(res =>
                dispatch({ type: ADD_CHORE, payload: allChores }))

    }
}
export const editChores = (chores) => dispatch => {
    //     event.preventDefault();
    console.log("console from editChores")
    dispatch({ type: EDIT_CHORE, id: chores.id, payload: chores });
    axios
        .put(`${chores.id}`, chores)
        .then(res => {
            console.log("Res from editChores", res)
            this.props.history.push(`/chores-list/${chores.id}`);
        })
        .catch(error => {
            console.log(error)
            this.setError("Update Request Failed")
        }, [])
}

export const toggleChoreEditor = () => dispatch => {
    console.log('toggle');
    dispatch({ type: TOGGLE_EDITING })
}