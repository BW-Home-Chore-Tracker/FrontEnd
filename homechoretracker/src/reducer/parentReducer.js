//SEE AUTH REDUCER


// import { POST_PARENT_START, POST_PARENT_SUCCESS, POST_PARENT_FAIL } from '../actions/parentActions';
// const initialState = {
//     users: [
//         {


//             username: '',
//             password: '',
//             first_name: '',
//             last_name: '',
//             email: '',
//             family_password: "",
//             role: "parent"
//         },
//     ],
//     isLoading: false,
//     errors: null,
//     isSuccess: true,
// };
// export default (state = initialState, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case types.GET_PARENT_START:
//             return { ...state, isLoading: true, errors: null };
//         case types.GET_PARENT_SUCCESS:
//             return { ...state, isLoading: false, errors: null, users: payload };
//         case types.GET_PARENT_FAIL:
//             return { ...state, isLoading: false, errors: payload };
//         case types.GET_PARENT_START:
//             return { ...state, isLoading: true, errors: null };
//         case types.GET_PARENT_SUCCESS:
//             return { ...state, isLoading: false, errors: null, users: payload };
//         case types.GET_PARENT_FAIL:
//             return { ...state, isLoading: false, errors: payload };
//         case types.POST_PARENT_START:
//             return { ...state, isLoading: true, errors: null };
//         case types.POST_PARENT_SUCCESS:
//             const updatedPOSTParentList = [...state.users, payload];
//             return { ...state, isLoading: false, errors: null, users: updatedPOSTParentList, isSuccess: true };
//         case types.POST_PARENT_FAIL:
//             return { ...state, isLoading: false, errors: payload, isSuccess: false };
//         case types.PUT_PARENT_START:
//             return { ...state, isLoading: true, errors: null };
//         case types.PUT_PARENT_SUCCESS:
//             return { ...state, isLoading: false, errors: null, users: payload, isSuccess: true };
//         case types.PUT_PARENT_FAIL:
//             return { ...state, isLoading: false, errors: payload, isSuccess: false };
//         case types.DELETE_PARENT_START:
//             return { ...state, isLoading: true, errors: null };
//         case types.DELETE_PARENT_SUCCESS:
//             const updatedParent = state.users.filter(user => user.id !== payload);
//             return { ...state, isLoading: false, errors: null, users: updatedParent };
//         case types.DELETE_PARENT_FAIL:
//             return { ...state, isLoading: false, errors: payload };
//         default:
//             return state;
//     }
// };
