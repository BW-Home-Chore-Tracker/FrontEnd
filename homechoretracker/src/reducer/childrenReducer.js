import {
    GET_CHILDREN_START, GET_CHILDREN_SUCCESS, GET_CHILDREN_FAIL, POST_CHILDREN_START, POST_CHILDREN_SUCCESS, POST_CHILDREN_FAIL, PUT_CHILDREN_START, PUT_CHILDREN_SUCCESS, PUT_CHILDREN_FAIL, DELETE_CHILDREN_START,
    DELETE_CHILDREN_SUCCESS, DELETE_CHILDREN_FAIL
} from '../actions/childrenActions';
const initialState = {
    children: [
        {


            "child_id": 3,
            "parent_id": 1,
            "chore_id": 1,
            "child_username": "testchild5",
            "child_password": null,
            "messages": "tester",
            "chore_streak": 0,
            "chore_score": 10,
            "bonus_points": null,
            "role": "child"
        },
    ],
    isLoading: false,
    errors: null,
    isSuccess: true,
};
export default (state = initialState, action) => {

    switch (action.type) {
        case GET_CHILDREN_START:
            return { ...state, isLoading: true, errors: null };
        case GET_CHILDREN_SUCCESS:
            return { ...state, isLoading: false, errors: null, children: action.payload };
        case GET_CHILDREN_FAIL:
            return { ...state, isLoading: false, errors: action.payload };
        case POST_CHILDREN_START:
            return { ...state, isLoading: true, errors: null };
        case POST_CHILDREN_SUCCESS:
            return { ...state, isLoading: false, children: action.payload };
            return { ...state, isLoading: false, errors: null, children: action.payload, isSuccess: true };
        case POST_CHILDREN_FAIL:
            return { ...state, errors: action.payload, isSuccess: false };
        case PUT_CHILDREN_START:
            return { ...state, isLoading: true, errors: null };
        case PUT_CHILDREN_SUCCESS:
            return { ...state, isLoading: false, errors: null, children: action.payload, isSuccess: true };
        case PUT_CHILDREN_FAIL:
            return { ...state, isLoading: false, errors: action.payload, isSuccess: false };
        case DELETE_CHILDREN_START:
            return { ...state, isLoading: true, errors: null };
        case DELETE_CHILDREN_SUCCESS:
            const updatedChildren = state.children.filter(child => child.id !== action.payload);
            return { ...state, isLoading: false, errors: null, children: updatedChildren };
        case DELETE_CHILDREN_FAIL:
            return { ...state, isLoading: false, errors: action.payload };
        default:
            return state;
    }
};
