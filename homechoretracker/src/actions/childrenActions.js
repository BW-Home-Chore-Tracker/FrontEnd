import axiosWithAuth from '../components/axiosWithAuth';
//action types
export const POST_CHILDREN_START = "POST_CHILDREN_START";
export const POST_CHILDREN_SUCCESS = "POST_CHILDREN_SUCCESS";
export const POST_CHILDREN_FAIL = "POST_CHILDREN_FAIL";
export const PUT_CHILDREN_START = "PUT_CHILDREN_START";
export const PUT_CHILDREN_SUCCESS = "PUT_CHILDREN_SUCESS";
export const PUT_CHILDREN_FAIL = "PUT_CHILDREN_FAIL"
export const DELETE_CHILDREN_SUCCESS = "DELETE_CHILDREN_SUCCESS";

export const addChildren = child => dispatch => {

    axiosWithAuth().post('https://chore-tracker-bw.herokuapp.com/children/', child)
        .then(response =>
            dispatch({ type: POST_CHILDREN_SUCCESS, payload: response.data }))
        .catch(error => {
            dispatch({ type: POST_CHILDREN_FAIL, payload: error.response.data });
        })
};
export const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
        .put(`/children/${child.id}`, child)
        .then(res => {
            updateChildren(children.map(child => {
                if (child.id === child.id) {
                    return child = res.data
                } else {
                    return child
                }
            }))
        })
}

export const deleteChildren = id => dispatch => {
    axiosWithAuth().delete(`/children/${id}`)
    dispatch({ type: types.DELETE_CHILDREN_SUCCESS, payload: id });
};