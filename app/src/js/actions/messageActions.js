//create unique UUIDs for each message
function generateUUID(){
    var d = new Date().getTime();
    if(window.performance && typeof window.performance.now === "function"){
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}


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

export function addResponse(message) {
  return {
  	type: "ADD_RESPONSE",
  	payload: message,
  }
}

export function addMessage(msg,user) {
	const trimmedMsg = msg;
	return {
		type: "ADD_MESSAGE",
		payload: {
			id: generateUUID(),
			userId: user.id,
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
