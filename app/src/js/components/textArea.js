import React, {Component} from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { connect } from "react-redux";
import { addMessage, updateMessage, processMessage } from '../actions/messageActions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const ENTER_KEY_CODE = 13;

@connect((store) => {
	return {
		messages: store.messages.messages,
		messageObj: store.messages
	};
})
class TextArea extends Component {

	handleSendMessage() {
		if( this.props.messageObj.tempMessage.length ) {
		  	this.props.dispatch( processMessage( this.props.messageObj.tempMessage ) );
		  	this.refs.chatInput.focus();
		}
	}

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
					  ref="chatInput"
				      hintText=""
				      floatingLabelText="Say Something"
				      multiLine={true}
				      rows={1}
				      rowsMax={3}
				      value={this.props.messageObj.tempMessage}
				      onChange={this._onChange.bind(this)}
				      onKeyDown={this._onKeyDown.bind(this)}
				      className="chat-input"
				      fullWidth={true}
	 				/>
				    <FloatingActionButton onClick={this.handleSendMessage.bind(this)}>
				    	<ContentAdd />
				    </FloatingActionButton>
				</div>
		    </MuiThemeProvider>
	    );
	}
}

module.exports = TextArea;
