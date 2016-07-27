const initialState = {
	fetching: false,
	fetched: false,
	user: { },
	hasRegistered: false,
	error: null,
}

const userReducer = ( state = initialState, action ) => {
	switch(action.type) {
		case "SET_USER_NAME": {
			return { ...state, user: { ...state.user, name: action.payload, }, };
			break;
		}
		case "RECIEVED_USER": {
			return { ...state, fetching: false, fetched: true, user: action.payload };
			break;
		}
		case "REGISTER_USER": {
			return { ...state, hasRegistered: true };
			break;
		}
	}
	return state;
}

export default userReducer;

