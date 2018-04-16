import axios from 'axios';
import store from '../store';
import config from '../config/config';
import { tokenRoutine } from '../redux/user/routine';

export const authMiddleware = ({ dispatch, getState }) => next => (action) => {
  console.log('auth middlewahre hit', getState(), action.type, tokenRoutine.TRIGGER ,tokenRoutine.SUCCESS)
  if (
    !axios.defaults.headers.common.Authorization &&
    action.type !== tokenRoutine.TRIGGER &&
    action.type !== tokenRoutine.REQUEST &&
    !getState().user.auth.loading) {
   dispatch(tokenRoutine.trigger());
   console.log('would trigger')
  }
  if (action.type === tokenRoutine.SUCCESS) {
    axios.defaults.headers.common.Authorization = action.payload;
  }
  return next(action);
  
};

const selectToken = state => state.auth.token;

let token;
const listener = () => {
  const previousToken = token;
  token = selectToken(store.getState());

  if (previousToken !== token) {
    axios.defaults.headers.common.Authorization = token;
    
  }
};

//store.subcribe(listener);
axios.defaults.baseURL = config.apiUrl;
const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
