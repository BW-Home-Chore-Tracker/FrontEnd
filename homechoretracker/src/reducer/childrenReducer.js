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
    const { type, payload } = action;
    switch (type) {
        case types.GET_CHILDREN_START:
            return { ...state, isLoading: true, errors: null };
        case types.GET_CHILDREN_SUCCESS:
            return { ...state, isLoading: false, errors: null, children: payload };
        case types.GET_CHILDREN_FAIL:
            return { ...state, isLoading: false, errors: payload };
        case types.POST_CHILDREN_START:
            return { ...state, isLoading: true, errors: null };
        case types.POST_CHILDREN_SUCCESS:
            const updatedPOSTChildrenList = [...state.children, payload];
            return { ...state, isLoading: false, errors: null, children: updatedPOSTChildrenList, isSuccess: true };
        case types.POST_CHILDREN_FAIL:
            return { ...state, isLoading: false, errors: payload, isSuccess: false };
        case types.PUT_CHILDREN_START:
            return { ...state, isLoading: true, errors: null };
        case types.PUT_CHILDREN_SUCCESS:
            return { ...state, isLoading: false, errors: null, children: payload, isSuccess: true };
        case types.PUT_CHILDREN_FAIL:
            return { ...state, isLoading: false, errors: payload, isSuccess: false };
        case types.DELETE_CHILDREN_START:
            return { ...state, isLoading: true, errors: null };
        case types.DELETE_CHILDREN_SUCCESS:
            const updatedChildren = state.children.filter(child => child.id !== payload);
            return { ...state, isLoading: false, errors: null, children: updatedChildren };
        case types.DELETE_CHILDREN_FAIL:
            return { ...state, isLoading: false, errors: payload };
        default:
            return state;
    }
};
