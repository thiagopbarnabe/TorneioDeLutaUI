import {
    INICIAR_TORNEIO_REQUEST,
    INICIAR_TORNEIO_SUCCESS,
    INICIAR_TORNEIO_FAILURE
} from './types';
import { Dispatch } from 'redux';
import { postItemAction } from '../baseActions';

export const iniciarTorneio = (
    lutadoresId: Array<number>
) => (dispatch: Dispatch) => {
    return postItemAction({
        request: INICIAR_TORNEIO_REQUEST,
        success: INICIAR_TORNEIO_SUCCESS,
        failure: INICIAR_TORNEIO_FAILURE,
        dispatch: dispatch,
        url: 'torneio',
        bodyObj:{
            lutadoresId:lutadoresId
        }
    });
};