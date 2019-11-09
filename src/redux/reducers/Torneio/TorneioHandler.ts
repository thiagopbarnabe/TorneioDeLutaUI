import { ApplicationTorneioData } from '../../../types/ApplicationState';

const actionMap: any = {
    INICIAR_TORNEIO_REQUEST: (torneioData: ApplicationTorneioData, action: any) => {
        return torneioData;
    },
    INICIAR_TORNEIO_SUCCESS: (torneioData: ApplicationTorneioData, action: any) => {
        return action.payload;
    },
    INICIAR_TORNEIO_FAILURE: (torneioData: ApplicationTorneioData, action: any) => {
        return torneioData;
    }
};

export const torneioHandler = (torneioData: ApplicationTorneioData, action: any) => {
    if (actionMap[action.type]) {
        return actionMap[action.type](torneioData, action);
    } else {
        return torneioData;
    }
};