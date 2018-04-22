import axios from 'axios';
import config from '../config/config';
import { tokenR } from '../redux/user/routine';

export const authMiddleware = ({ dispatch, getState }) => next => (action) => {
  if (action.type === tokenR.SUCCESS) {
    axios.defaults.headers.common.Authorization = action.payload;
  }
  return next(action);
};

axios.defaults.baseURL = config.apiUrl;
const api = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
