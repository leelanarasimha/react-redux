import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import RootReducer from './Store/RootReducer';


const logger = (store) => {
    return next => {
        return action => {
            console.log('middleware dispatching', action);
            let result = next(action);
            console.log('middleware after dispatch', store.getState());
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(RootReducer, composeEnhancers(applyMiddleware(logger)));

const app = (
    <Provider store={store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
