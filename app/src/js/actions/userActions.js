//this function will be used to get the actual user
export function fetchUser() {
	return {
		type: "FETCH_USER_COMPLETE",
		payload: {}
	}
}

export function setUserName(name) {
	return {
		type: "SET_USER_NAME",
		payload: name,
	}
}

export function registerUser() {
	return {
		type: "REGISTER_USER",
		payload: {},
	}
}

export function setUserId(userId) {
	console.log("current user id is " + userId);
	return {
		type: "SET_USER_ID",
		payload: userId
	};
}
