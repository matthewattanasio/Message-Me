import { combineReducers} from "redux";
import userReducer from './userReducer';
import messageReducer from './messageReducer';


const reducers = combineReducers({
	user: userReducer,
	messages: messageReducer,
});

export default reducers;
