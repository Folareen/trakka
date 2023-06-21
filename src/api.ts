import axios from 'axios'

const api = axios.create({
    baseURL: 'https://trakka.onrender.com/api/v1/',
    timeout: 8000
})

api.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error.response.data.message);
});

export const setAxiosToken = (token: string | null) => {

    return (api.interceptors.request.use(
        async (config) => {

            config.headers = {
                Authorization: `Bearer ${token}`,
            };
            return config;
        },
        (error) => {
            Promise.reject(error);
        }
    ))
}


export default api