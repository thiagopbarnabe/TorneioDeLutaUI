import { Dispatch } from 'redux';

export interface PaginatedBaseGETObj {
    dispatch: Dispatch
    request: any
    success: any
    failure: any
    count: number
    offset: number
    sortString?: string
    filterString?: string
}

export interface BaseGETListObj {
    dispatch: Dispatch
    request: any
    success: any
    failure: any
    count: number
    offset: number
    url: string
    sortString?: string
    filterString?: string,
    api?: any
}

export interface BaseActionObj {
    dispatch: Dispatch
    request: any
    success: any
    failure: any
}
export interface BaseItemActionObj {
    dispatch: Dispatch
    request: any
    success: any
    failure: any
    url: string
    historyUrl?: string
    bodyObj?: any,
    api?: any,
    historyApi?: any
}

export interface BaseItemPOSTPUTActionObj {
    dispatch: Dispatch
    request: any
    success: any
    failure: any
    url: string
    bodyObj: any,
    api?: any,
    callback?: any
}
