import axiosWithAuth from '../components/axiosWithAuth';
import axios from 'axios';

//action types
export const GET_CHILDREN_START = "GET_CHILDREN_START";
export const GET_CHILDREN_SUCCESS = "GET_CHILDREN_SUCCESS";
export const GET_CHILDREN_FAIL = "GET_CHILDREN_FAIL";
export const POST_CHILDREN_START = "POST_CHILDREN_START";
export const POST_CHILDREN_SUCCESS = "POST_CHILDREN_SUCCESS";
export const POST_CHILDREN_FAIL = "POST_CHILDREN_FAIL";
export const PUT_CHILDREN_START = "PUT_CHILDREN_START";
export const PUT_CHILDREN_SUCCESS = "PUT_CHILDREN_SUCESS";
export const PUT_CHILDREN_FAIL = "PUT_CHILDREN_FAIL";
export const DELETE_CHILDREN_START = "DELETE_CHILDREN_START"
export const DELETE_CHILDREN_SUCCESS = "DELETE_CHILDREN_SUCCESS";
export const DELETE_CHILDREN_FAIL = "DELETE_CHILDREN_FAIL";
export const getChildren = () => dispatch => {
    console.log("action");
    dispatch({ type: GET_CHILDREN_START });
    axiosWithAuth()
        .get(`https://chore-tracker-bw.herokuapp.com/chores`)
        .then(res =>
            dispatch({
                type: GET_CHILDREN_SUCCESS,
                payload: res.data
            })
        )

        .catch(err => dispatch({ type: GET_CHILDREN_FAIL, payload: err }));

}

export const addChildren = (child) => dispatch => {
    dispatch({ type: POST_CHILDREN_START });
    axiosWithAuth().post(`/children`, child)
        .then(response =>
            dispatch({ type: POST_CHILDREN_SUCCESS, payload: response.data }))
        .catch(error => {
            dispatch({ type: POST_CHILDREN_FAIL, payload: error.response.data });
        })
};
export const saveEdit = (id, child) => dispatch => {
    dispatch({ type: PUT_CHILDREN_START });
    axiosWithAuth().put(`https://chore-tracker-bw.herokuapp.com/children/${id}`, child)
        .then(response =>
            dispatch({ type: PUT_CHILDREN_SUCCESS, payload: response.data })
                .catch(err =>
                    dispatch({ type: PUT_CHILDREN_FAIL, payload: err.response })
                ))
};




export const deleteChildren = id => dispatch => {
    dispatch({ type: DELETE_CHILDREN_START });
    axiosWithAuth()
        .delete(`http://chore-tracker-bw.herokuapp.com/children/${id}`)
        .then(res =>
            dispatch({ type: DELETE_CHILDREN_SUCCESS, payload: id })
                .catch(err => dispatch({ type: DELETE_CHILDREN_FAIL, payload: err.response })
                )
        )
}