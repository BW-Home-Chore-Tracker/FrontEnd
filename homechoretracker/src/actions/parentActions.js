//SEE AUTH ACTIONS

// import axiosWithAuth from '../components/axiosWithAuth';
// //action types
// export const POST_PARENT_START = "POST_PARENT_START";
// export const POST_PARENT_SUCCESS = "POST_PARENT_SUCCESS";
// export const POST_PARENT_FAIL = "POST_PARENT_FAIL";


// export const addParent = user => dispatch => {

//     axiosWithAuth().post('/users/register', user)
//         .then(response =>
//             dispatch({ type: POST_PARENT_SUCCESS, payload: response.data }))
//         .catch(error => {
//             dispatch({ type: POST_PARENT_FAIL, payload: error.response.data });
//         })
// };


// // export const deleteParent = id => async dispatch => {
// // 	dispatch({ type: types.DELETE_PARENT_START });
// // 	try {
// // 		const response = await toolApi.delete(`/parent/${id}`);
// // 		dispatch({ type: types.DELETE_PARENT_SUCCESS, payload: id });
// // 	} catch (error) {
// // 		dispatch({ type: types.DELETE_PARENT_FAIL, payload: error.response.data });
// // 	}
// // };
