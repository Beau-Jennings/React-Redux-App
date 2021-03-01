import { FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_FAIL } from "../actions/CharActions";

const initialState = {
    character: "",
    isFetching: false,
    error: ""
};

export const charReducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCH_CHARACTERS_LOADING):
        return({
            ...state,
            isFetching: true
        });

        case(FETCH_CHARACTERS_SUCCESS):
        return({
            ...state,
        character: action.payload,
            isFetching: false
        });

        case(FETCH_CHARACTERS_FAIL):
        return ({
            ...state,
            isFetching: false,
            error: action.payload
        });

        default:
            return state;
    };
};