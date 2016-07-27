import React, {Component} from 'react';
import { TextField, FloatingActionButton, ContentAdd } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from "react-redux";
import { addMessage, updateMessage, processMessage } from '../actions/messageActions';

const ENTER_KEY_CODE = 13;


@connect((store) => {
	return {
		messages: store.messages.messages,
		messageObj: store.messages
	};
})
class TextArea extends Component {

  	_onChange(event, value) {
	    this.props.dispatch( updateMessage(value) );
	}

	_onKeyDown(event) {
		const theMessage = this.props.messageObj;

		if (event.keyCode === ENTER_KEY_CODE) {
		  event.preventDefault();
		  if( theMessage.tempMessage.length ) {
		  	this.props.dispatch( processMessage( theMessage.tempMessage ) );
		  }
		}
	}

	render() {

		return (
			<MuiThemeProvider>
			<div className="chat">
				<TextField
			      hintText=""
			      floatingLabelText="Say Something"
			      multiLine={true}
			      rows={1}
			      value={this.props.messageObj.tempMessage}
			      onChange={this._onChange.bind(this)}
			      onKeyDown={this._onKeyDown.bind(this)}
			      className="chat-input" />
			    <FloatingActionButton>

			    </FloatingActionButton>
			</div>
		    </MuiThemeProvider>
	    );
	}
}

module.exports = TextArea;
