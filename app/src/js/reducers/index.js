import { combineReducers } from "redux";
import appReducer from './appReducer';
import userReducer from './userReducer';
import messageReducer from './messageReducer';


const reducers = combineReducers({
	messages: messageReducer,
	user: userReducer,
	app: appReducer,
});

export default reducers;
