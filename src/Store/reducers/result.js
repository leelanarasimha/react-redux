import * as actionTypes from '../Constants';
const initialState = {
    results: []
}


const results = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.value})
            }

            case actionTypes.DELETE_RESULT: 
            const updatedarray = state.results.filter(result => result.id !== action.id)
            return {
                ...state,
                results: updatedarray
            }
    }
    return state;
}

export default results;