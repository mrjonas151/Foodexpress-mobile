import axios from "axios";
import Constants from 'expo-constants';

const API_URL = Constants?.expoConfig?.extra?.API_URL;

if (!API_URL) {
    throw new Error('API_URL não definida no app.json');
  }

const api = axios.create({
    baseURL: API_URL
});


export { api };








