//Create and manage components
import React from 'react';
//Render components into the dom
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));


// ReactDOM.render(<App></App>, document.querySelector('.container'));
ReactDOM.render(<App />, document.querySelector('.container'));