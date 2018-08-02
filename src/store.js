// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import DevTools from './components/DevTools';

const isProd = (process.env.NODE_ENV === 'production') ? true: false;

// Production store
let configureStore = (preloadedState: any) => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk)
)
if (!isProd) {
  // Development store
  configureStore = (preloadedState: any) => {
    const store = createStore(
      rootReducer,
      preloadedState,
      compose(
        applyMiddleware(thunk, createLogger()),
        DevTools.instrument()
      )
    );
  
    return store
  }
}

export default configureStore;
