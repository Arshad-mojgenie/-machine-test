import axios from 'axios'
import { getApiUrl } from '../Utils/Helpers';


const instance = axios.create({
    baseURL: getApiUrl(),
})

instance.defaults.headers.common['Accept'] = 'application/json'
instance.defaults.headers.common['Authorization'] = `Bearer UoX5Ay-CEJhWxfD-JNcZ`
instance.interceptors.response.use((response) => {
    return response;
}, (err) => {
    if (err.response.status === 401) {
        // if res status == 401
        // or action based on res 
    }
    return Promise.reject(err);
});

export default instance



