import {
    FETCH_CHORES_START,
    FETCH_CHORES_SUCCESS,
    FETCH_CHORES_FAIL,
    ADD_CHORE_START,
    ADD_CHORE_SUCCESS,
    ADD_CHORE_FAIL,
    EDIT_CHORE_SUCCESS,
    DELETE_CHORE_START,
    DELETE_CHORE_SUCCESS
} from "../actions/actions";

const initialState = {
    chores: [],
    error: "",
    isFetching: false,
    adding: false,
    deleting: false,
    editing: false
};

function choreReducer(state = initialState, action) {
    //console.log("reducer", action);
    switch (action.type) {
        case FETCH_CHORES_START:
            return {
                ...state,
                isFetching: true,
                error: "Uh Oh.."
            };
        case FETCH_CHORES_SUCCESS:
            return {
                ...state,
                chores: action.payload,
                isFetching: false,

            };
        case FETCH_CHORES_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,

            };
        case ADD_CHORE_START:
            return {
                ...state,
                adding: true
            };
        case ADD_CHORE_SUCCESS:
            return {
                ...state,
                adding: false
            };
        case ADD_CHORE_FAIL:
            return {
                ...state,
                error: action.payload
            };



        case EDIT_CHORE_SUCCESS:
            return {
                ...state,
                chore: action.payload
                // ...state.map((chore) => chore.id === action.id ? { ...chore, editing: !chore.editing } : chore)
            }

        case DELETE_CHORE_START:
            return {
                // ...state.filter((chore) => chore.id !== action.id)
                ...state,
                deleting: true,
            };
        case DELETE_CHORE_SUCCESS:
            return {
                ...state,
                deleting: false
            }

        default:
            return state;
    }
}
export default choreReducer;