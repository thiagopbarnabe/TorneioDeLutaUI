import axios, { AxiosPromise } from 'axios';
import axiosRetry from 'axios-retry';
axiosRetry(axios, {
    retries: 3,
    retryDelay: (retryCount: number) => retryCount * 1000
});

export default class API {

    private apiOrigin: string;

    constructor(apiOrigin: string) {
        this.apiOrigin = apiOrigin;
    }

    /**
     * @param route The route of the resource you want to GET.
     * Appended to the project's API origin, does not need preceding '/'
     */
    public get(route: string): AxiosPromise {
        return axios.get(this.apiOrigin + route);
    }

    /**
     *
     * @param route The route of the resource you want to POST your data.
     * Appended to the project's API origin, does not need preceding '/'
     * @param content The body of the POST request
     */
    public post(route: string, content: object | string): AxiosPromise {
        return axios.post(this.apiOrigin + route, content);
    }

    /**
     *
     * @param route The route of the resource you want to PUT your data.
     * Appended to the project's API origin, does not need preceding '/'
     * @param content The body of the PUT request
     */
    public put(route: string, content: object | string): AxiosPromise {
        return axios.put(this.apiOrigin + route, content);
    }

    /**
     * @param route The route of the resource you want to delete.
     * Appended to the project's API origin, does not need preceding '/'
     */
    public delete(route: string): AxiosPromise {
        return axios.delete(this.apiOrigin + route);
    }
}