import * as messageActions from './actions/messageActions';
import * as userActions from './actions/userActions';
import io from 'socket.io-client';

var socket = null;

export function chatMiddleware(store) {
	return next => action => {
		if (socket && action.type === "ADD_MESSAGE") {
			socket.emit('message', action.payload);
		}

		return next(action);
	};
}

export default function (store) {
	socket = io.connect(`${location.protocol}//${location.host}`);

	socket.on('start', data => {
		store.dispatch( userActions.setUserId(data.userId) );
	});

	socket.on('message', message => {
		store.dispatch( messageActions.addResponse(message) );
	});
}
