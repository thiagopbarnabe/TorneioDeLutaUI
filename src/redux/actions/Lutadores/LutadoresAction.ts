import {
    GET_LUTADORES_LIST_REQUEST,
    GET_LUTADORES_LIST_SUCCESS,
    GET_LUTADORES_LIST_FAILURE,
    CARREGAR_LUTADORES_REQUEST,
    CARREGAR_LUTADORES_SUCCESS,
    CARREGAR_LUTADORES_FAILURE
} from './types';
import { Dispatch } from 'redux';
import { getListAction, postItemAction } from '../baseActions';

export const getLutadores = (
    count: number = 100000,
    offset: number = 0,
    sortString: string = '',
    filterString: string = ''
) => (dispatch: Dispatch) => {
    return getListAction({
        request: GET_LUTADORES_LIST_REQUEST,
        success: GET_LUTADORES_LIST_SUCCESS,
        failure: GET_LUTADORES_LIST_FAILURE,
        dispatch: dispatch,
        count: count,
        offset: offset,
        sortString: sortString,
        filterString: filterString,
        url: 'lutador'
    });
};

export const carregarLutadores = (
    callback?: ()=>any
) => (dispatch: Dispatch) => {
    return postItemAction({
        request: CARREGAR_LUTADORES_REQUEST,
        success: CARREGAR_LUTADORES_SUCCESS,
        failure: CARREGAR_LUTADORES_FAILURE,
        dispatch: dispatch,
        url: 'lutador',
        bodyObj:{},
        callback: callback
    });
};