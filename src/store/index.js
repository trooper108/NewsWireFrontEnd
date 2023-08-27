import {createStore, applyMiddleware , compose} from 'redux';
import promise from 'redux-promise'
import combinedReducers from './reducer';

const ReduxStore = () =>{
    const webToolEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middlewareEnhanchers = applyMiddleware(promise);
    const composedEnhancher = webToolEnhanchers(middlewareEnhanchers);

    const store = createStore(combinedReducers , composedEnhancher);
    return store;
}
export default ReduxStore;