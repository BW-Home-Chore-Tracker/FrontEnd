import {
    FETCH_CHORES_START,
    FETCH_CHORES_SUCCESS,
    FETCH_CHORES_FAIL,
    ADD_CHORE,
    TOGGLE_EDITING,
    UPDATING_CHORE,
    EDIT_CHORE,
    DELETE_CHORE
} from "../actions/actions";

const initialState = {
    chores: [],
    error: "",
    isFetching: false,
    editing: false
};

function choreReducer(state = initialState, action) {
    console.log("reducer", action);
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
                error: ""
            };
        case FETCH_CHORES_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case ADD_CHORE:
            return {
                ...state.concat([action.data])
            };
        case TOGGLE_EDITING:
            return {
                ...state,
                editing: !state.editing
            };
        case EDIT_CHORE:
            return {
                // ...state,
                // chore:action.payload
                ...state.map((chore) => chore.id === action.id ? { ...chore, editing: !chore.editing } : chore)
            }
        case UPDATING_CHORE:
            return {
                ...state,
                chores: action.newChore
            };

        case DELETE_CHORE:
            return {
                ...state.filter((chore) => chore.id !== action.id)
            }

        default:
            return state;
    }
}
export default choreReducer;