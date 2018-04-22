import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import checkout from '../redux/checkout/reducer';
import user from '../redux/user/reducer';
import general from '../redux/general/reducer';

export default combineReducers({
  user,
  checkout,
  general,
  form: formReducer,
});
