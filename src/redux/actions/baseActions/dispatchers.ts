export const requestDispatch = (type: string) => ({type: type});
export const successDispatch = (payload: any, type: string) => {
    return {
        type: type,
        payload: payload
    };
};
export const failureDispatch = (type: string) => ({type: type});
