import { ApplicationTorneioData } from '../../../types/ApplicationState';
import {
    INICIAR_TORNEIO_REQUEST,
    INICIAR_TORNEIO_SUCCESS,
    INICIAR_TORNEIO_FAILURE
} from '../../actions/Torneio/types';
import { torneioHandler } from './TorneioHandler';

const torneioReducer = (state: ApplicationTorneioData = {}, action: any) => {
    switch (action.type) {
        case INICIAR_TORNEIO_REQUEST:
        case INICIAR_TORNEIO_SUCCESS:
        case INICIAR_TORNEIO_FAILURE:
            return torneioHandler(state,action);
        default:
            return state;
    }
};

export default torneioReducer;