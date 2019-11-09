import API from '../../../utilites/Api';

import {
    BaseItemActionObj, BaseGETListObj, BaseItemPOSTPUTActionObj
} from '../../types/actionTypes';
import { AxiosResponse, AxiosError } from 'axios';

import {
    requestDispatch,
    successDispatch,
    failureDispatch
} from './';

export const getListAction = (listReqObj: BaseGETListObj) => {
    const {
        dispatch,
        request,
        success,
        failure,
        // count,
        // offset,
        // sortString,
        // filterString,
        api
    } = listReqObj;
    const { url } = listReqObj;
    // if (url.indexOf('?') > -1) {
    //     url += `&offset=${offset}&count=${count}`;
    // } else {
    //     url += `?offset=${offset}&count=${count}`;
    // }
    // if (sortString) {
    //     url += `&sorts=${sortString}`;
    // }

    // if (filterString) {
    //     url += `&filters=${filterString}`;
    // }

    let useAPI = API;
    if (api) {
        useAPI = api;
    }

    dispatch(requestDispatch(request));
    return useAPI.get(url)
        .then((res: AxiosResponse) => {
            dispatch(successDispatch(res.data, success));
            return {
                data: res.data,
                dispatch: dispatch
            };
        })
        .catch((err: AxiosError) => {
            dispatch(failureDispatch(failure));
            throw err;
        });
};

export const getItemAction = (reqObj: BaseItemActionObj) => {
    const {
        dispatch,
        request,
        success,
        failure,
        url,
        api
    } =  reqObj;

    let useAPI = API;
    if (api) {
        useAPI = api;
    }

    dispatch(requestDispatch(request));
    return useAPI.get(url)
        .then((cr: AxiosResponse) => {
            dispatch(successDispatch(cr.data, success));
            return {
                data: cr.data,
                dispatch: dispatch
            };
        })
        .catch((err: AxiosError) => {
            dispatch(failureDispatch(failure));
            throw err;
        });
};

export const postItemAction = (reqObj: BaseItemPOSTPUTActionObj) => {
    const {
        dispatch,
        request,
        success,
        failure,
        url,
        bodyObj,
        api,
        callback
    } =  reqObj;

    if (bodyObj !== undefined) {
        let useAPI = API;
        if (api) {
            useAPI = api;
        }
        dispatch(requestDispatch(request));
        return useAPI.post(url, bodyObj)
            .then((res: AxiosResponse) => {
                dispatch(successDispatch(res.data, success));
                if (callback) {
                    callback();
                }
                return {
                    data: res.data,
                    dispatch: dispatch
                };
            })
            .catch((err: AxiosError) => {
                dispatch(failureDispatch(failure));
                throw err;
            });
    }  else {
        throw new Error(`Missing bodyObj to preform POST to url: ${bodyObj}`);
    }
};

export const putItemAction = (reqObj: BaseItemPOSTPUTActionObj) => {
    const {
        success,
        request,
        failure,
        dispatch,
        url,
        bodyObj,
        api
    } = reqObj;

    if (bodyObj !== undefined) {
        let useAPI = API;
        if (api) {
            useAPI = api;
        }
        dispatch(requestDispatch(request));
        return useAPI.put(url, bodyObj)
            .then((res: any) => {
                dispatch(successDispatch(res.data, success));
                return {
                    data: res.data,
                    dispatch: dispatch
                };
            })
            .catch((err: any) => {
                dispatch(failureDispatch(failure));
                throw err;
            });
    } else {
        throw new Error(`Missing bodyObj to preform PUT to url: ${bodyObj}`);
    }
};

export const deleteItemAction = (reqObj: BaseItemActionObj) => {
        const {
            dispatch,
            request,
            success,
            failure,
            url,
            api
        } = reqObj;

        let useAPI = API;
        if (api) {
            useAPI = api;
        }

        dispatch(requestDispatch(request));
        return useAPI.delete(url)
            .then((res: any) => {
                dispatch(successDispatch(res.data, success));
                return {
                    data: res.data,
                    dispatch: dispatch
                };
            })
            .catch((err: any) => {
                dispatch(failureDispatch(failure));
                throw err;
            });
};
