import { ApplicationLutadorData } from '../../../types/ApplicationState';
import {
    GET_LUTADORES_LIST_REQUEST,
    GET_LUTADORES_LIST_SUCCESS,
    GET_LUTADORES_LIST_FAILURE,
    CARREGAR_LUTADORES_REQUEST,
    CARREGAR_LUTADORES_SUCCESS,
    CARREGAR_LUTADORES_FAILURE
} from '../../actions/Lutadores/types';
import { lutadoresListHandler } from './LutadoresHandler';

const lutadorReducer = (state: ApplicationLutadorData = {}, action: any) => {
    switch (action.type) {
        case GET_LUTADORES_LIST_REQUEST:
        case GET_LUTADORES_LIST_SUCCESS:
        case GET_LUTADORES_LIST_FAILURE:
            return {
                ...state,
                lutadoresList: lutadoresListHandler(state.lutadoresList,action)
            };
        case CARREGAR_LUTADORES_REQUEST:
        case CARREGAR_LUTADORES_SUCCESS:
        case CARREGAR_LUTADORES_FAILURE:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default lutadorReducer;