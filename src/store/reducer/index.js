import {combineReducers} from 'redux'
import newsReducers from './newsReducer'
const combinedReducers = combineReducers({
    newsReducers
});
export default combinedReducers;