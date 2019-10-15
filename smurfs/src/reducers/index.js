import { 
    START_FETCHING, 
    FETCH_SUCCESS, 
    FETCH_FAILURE,
    START_POSTING,
    POST_SUCCESS,
    POST_FAILURE
 } from "../actions";

const initialState = {
    smurfs: [],
    isFetching: false,
    error: "",
    id: ""
}

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: '',
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload
            };
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case START_POSTING:
            return {
                ...state,
                smurfs: [
                    ...state.smurfs
                ],
                isFetching: true,
                error: "",
                id: ""
            };
        case POST_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: "",
                id: ""
            };
        case POST_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
};

export default reducer;