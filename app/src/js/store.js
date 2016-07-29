import { applyMiddleware, createStore } from "redux";
import {chatMiddleware} from './chat';
import reducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let middleware = applyMiddleware(
	thunk,
	chatMiddleware,
	logger()
);

export default createStore(reducers, middleware)
