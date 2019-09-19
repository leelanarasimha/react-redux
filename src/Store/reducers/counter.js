import * as actionTypes from '../Constants';

const initialState = {
    counter: 0
};


const counter = (state = initialState, action) => {

    if (action.type === actionTypes.INCREMENT) {
        return {
            counter: state.counter + 1
        }
    }

    return state;
}

export default counter;
