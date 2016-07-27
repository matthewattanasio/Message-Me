
const initialState = {
	fetching: false,
	fetched: false,
	messages: [],
	error: null,
}

const messageReducer = ( state = initialState, action ) => {
	switch(action.type) {
		case "FETCH_MESSAGES": {
			return { ...state, fetching: true };
			break;
		}
		case "RECIEVED_MESSAGES": {
			return { ...state, fetching: false, fetched: true, messages: action.payload };
			break;
		}
		case "FETCH_MESSAGES_ERROR": {
			return { ...state, fetching: false, error: action.payload };
			break;
		}
		case "ADD_MESSAGE": {
			state = { ...state, fetching: false, fetched: false, messages: action.payload };
			break;
		}
	}
	return state;
}

export default messageReducer;
