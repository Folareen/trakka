import axios from 'axios'

const api = axios.create({
    baseURL: 'https://trakka.onrender.com/api/v1/',
    timeout: 8000
})

export const setAxiosToken = (token : string) => {

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