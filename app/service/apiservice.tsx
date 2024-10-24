import axios from 'axios'

const baseURL = "http://localhost:8080"

export const httpClient = axios.create({
    baseURL: baseURL
})

class ApiService {

    constructor(apiurl:string){
        this.apiurl = apiurl;
    }

    post(url, objeto){
        const requestUrl = `${this.apiurl}${url}`
        console.log(requestUrl)
        console.log(objeto)
        return httpClient.post(requestUrl, objeto);
    }

    put(url, objeto){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.put(requestUrl, objeto);
    }

    delete(url){
        const requestUrl = `${this.apiurl}${url}`
        return httpClient.delete(requestUrl)
    }

    get(url){
        const requestUrl = `${this.apiurl}${url}`
 
        return httpClient.get(requestUrl)
    }
}

export default ApiService;

/*import axios from 'axios';

const baseURL = 'http://localhost:8080';
const httpClient = axios.create({
    baseURL: baseURL
});

const ApiService = () => {
   

    const post = (url, objeto) => {
        const requestUrl = `${url}`;
        return httpClient.post(requestUrl, objeto);
    };

    const put = (url, objeto) => {
        const requestUrl = `${url}`;
        return httpClient.put(requestUrl, objeto);
    };

    const del = (url) => {
        const requestUrl = `${url}`;
        return httpClient.delete(requestUrl);
    };

    const get = (url) => {
        const requestUrl = `${url}`;
        return httpClient.get(requestUrl);
    };

    return { post, put, del, get };
};

export default ApiService;*/