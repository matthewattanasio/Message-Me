

const messageReducer = ( state = [], action ) => {
	switch(action.type) {
		case "ADD_MESSAGE": {
			console.log(action.payload);
			state = state.concat(action.payload);
		}
	}
	return state;
}

export default messageReducer;
