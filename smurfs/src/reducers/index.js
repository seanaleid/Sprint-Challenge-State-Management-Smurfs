// import { action creators } from "../actions";

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
}

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        // case :
        //     return {
        //         ...state
        //     };
        default:
            return state;
    }
};

export default reducer;