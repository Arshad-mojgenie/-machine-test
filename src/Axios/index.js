import axios from 'axios'
import { getApiUrl } from '../Utils/Helpers';

//////creating axios instance
const instance = axios.create({
    baseURL: getApiUrl(),
})

instance.defaults.headers.common['Accept'] = 'application/json'
instance.defaults.headers.common['Authorization'] = `Bearer O8Oc--EbAH4IAsV2p4u_`
instance.interceptors.response.use((response) => {
    return response;
}, (err) => {
    if (err.response.status === 401) {
        // if res status == 401
    }
    return Promise.reject(err);
});

export default instance



