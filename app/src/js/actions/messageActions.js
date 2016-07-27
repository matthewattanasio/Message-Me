export function fetchMessages() {
	return {
		type: "RECIEVED_MESSAGES",
		payload: [
			{
				id: 1,
				name: "matt",
				msg: "ya bro",
			},
			{
				id: 2,
				name: "matt",
				msg: "nah lol",
			}
		]
	}
}

export function addMessage(msg) {
	return {
		type: "ADD_MESSAGE",
		payload: msg,
	}
}
