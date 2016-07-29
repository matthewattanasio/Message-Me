
const initialState = {
	windowWidth: 0,
	windowHeight: 0,
	chatListHeight: 0
}

const messageReducer = ( state = initialState, action ) => {
	switch(action.type) {
		case "CHANGE_CHAT_LIST_HEIGHT": {
			return { ...state, chatListHeight: action.payload };
			break;
		}
	}
	return state;
}

export default messageReducer;
