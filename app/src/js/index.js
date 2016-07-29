import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//Import Component files
import App from './components/app';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // Needed for onTouchTap http://stackoverflow.com/a/34015469/988941

//Import the store component
import store from "./store";
import startChat from "./chat";

startChat(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('container'));
