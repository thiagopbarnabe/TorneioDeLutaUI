import { Lutador } from '../../../types/ApplicationState';

const actionMap: any = {
    GET_LUTADORES_LIST_REQUEST: (lutadorList: Array<Lutador>, action: any) => {
        return lutadorList;
    },
    GET_LUTADORES_LIST_SUCCESS: (lutadorList: Array<Lutador>, action: any) => {
        return action.payload;
    },
    GET_USER_LIST_FAILURE: (lutadorList: Array<Lutador>, action: any) => {
        return lutadorList;
    }
};

export const lutadoresListHandler = (lutadorList: Array<Lutador>, action: any) => {
    if (actionMap[action.type]) {
        return actionMap[action.type](lutadorList, action);
    } else {
        return lutadorList;
    }
};