import axiosApi from './AxiosAPI';

const getApiConfig = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/config/api.config.json', false);
    request.send(null);
    return JSON.parse(request.responseText);
};

const apiConfig = getApiConfig();

const apiOrigin = apiConfig.apiUrl;

const api = new axiosApi(apiOrigin);

export default api;

export {
    api,
    apiOrigin
};
