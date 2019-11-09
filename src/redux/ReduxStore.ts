import { applyMiddleware, createStore, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import initialState from './initialState';
import history from './history';

const store: Store = createStore(
    rootReducer(history),
    initialState,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            routerMiddleware(history)
        )
    )
);

export default store;
