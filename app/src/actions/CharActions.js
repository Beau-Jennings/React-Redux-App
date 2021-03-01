import axios from "axios";

export const FETCH_CHARACTERS_LOADING = "FETCH_GAMES_LOADING";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_GAME_SUCCESS";
export const FETCH_CHARACTERS_FAIL = "FETCH_GAMES_FAIL";

export const getChars = () => {
    return dispatch => {
        dispatch({type: FETCH_CHARACTERS_LOADING });

        axios
        .get("https://rickandmortyapi.com/api/character")
        .then(res => {
            console.log("this is res", res)
            dispatch({type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            console.log("this is err", err)
            dispatch({type: FETCH_CHARACTERS_FAIL, payload: err})
        });
    };
};

export const fetchGameLoading = () => {
    return({type: FETCH_CHARACTERS_LOADING});
};

export const fetchGameSuccess = (char) => {
    return({type: FETCH_CHARACTERS_SUCCESS, payload: char});
};

export const fetchGameFail = (error) => {
    return({type: FETCH_CHARACTERS_FAIL, payload: error});
};