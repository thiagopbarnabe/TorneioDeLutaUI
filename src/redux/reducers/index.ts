import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import lutadorReducer from './Lutadores/LutadorReducer';
import torneioReducer from './Torneio/TorneioReducer';

const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    lutador: lutadorReducer,
    torneio: torneioReducer
});

export default rootReducer;