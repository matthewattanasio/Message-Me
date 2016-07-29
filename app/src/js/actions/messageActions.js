export function fetchMessages() {
	return {
		type: "RECIEVED_MESSAGES",
		payload: [
			{
				id: new Date().getTime(),
				name: "Don",
				msg: "ya bro",
			},
			{
				id: new Date().getTime() + 1,
				name: "matt",
				msg: "nah lol",
			}
		]
	}
}

export function registerUser() {
	return {
		type: "REGISTER_USER",
		payload: {
			hasRegistered: true
		}
	}
}

export function addMessage(msg,user) {
	const trimmedMsg = msg;
	return {
		type: "ADD_MESSAGE",
		payload: {
			id: user.id,
			name: user.name,
			msg: trimmedMsg,
		},
	}
}

export function updateMessage(msg) {
	return {
		type: "UPDATE_MESSAGE",
		payload: msg,
	}
}

export function deleteMessage() {
	return {
		type: "DELETE_MESSAGE",
		payload: {}
	}
}

export function processMessage(msg) {

	return (dispatch, getState) => {
		const state = getState();
		dispatch( addMessage(msg,state.user.user) );
		dispatch( deleteMessage() );
	}
}
