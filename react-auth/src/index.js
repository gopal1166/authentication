import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// import reducer from './store/reducer';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/auth';
// const store = createStore(
//    reducer,
//    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//  );

// const store = createStore(rootReducer)
// const app = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// )
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer = combineReducers({
//     burgerBuilder: burgerBuilderReducer,
//     order: orderReducer
// });

const store = createStore(authReducer, composeEnhancers(
    applyMiddleware(thunk)
));

// console.log(store.getState())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
