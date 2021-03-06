import axios from 'axios';
import { AsyncStorage } from 'react-native';


const axiosInstance =  axios.create({
    baseURL:  "http://eaa14ad20b89.ngrok.io"
    });
    

axiosInstance.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    }, 
    (error) => {
        return Promise.reject(error);
    });

export default axiosInstance;