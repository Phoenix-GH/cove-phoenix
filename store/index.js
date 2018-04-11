import createStoreFromServer from './serverStore';
import configureStore from './configureStore';

const state = {
};

export default (initialState = state, props) => {
  if (props.isServer) {
    return createStoreFromServer(initialState, props);
  }
  return configureStore(initialState, props);
};
