import counter from './reducers/counter';
import results from './reducers/result';
import {combineReducers} from 'redux';

const RootReducer = combineReducers({
    ctr: counter,
    results: results
})

export default RootReducer;