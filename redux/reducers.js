import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import checkout from './checkout/reducer';
import user from './user/reducer';
import general from './general/reducer';

export default combineReducers({
  user,
  checkout,
  general,
  form: formReducer,
});
