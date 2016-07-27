import { combineReducers } from "redux";
import userReducer from './userReducer';
import messageReducer from './messageReducer';


const reducers = combineReducers({
	messages: messageReducer,
	user: userReducer
});

export default reducers;
