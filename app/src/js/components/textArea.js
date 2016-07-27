import React, {Component} from 'react';
import { TextField, FloatingActionButton, ContentAdd } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const ENTER_KEY_CODE = 13;

class TextArea extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}

  	_onChange(event, value) {
	    this.setState({text: event.target.value});
	}

	_onKeyDown(event) {
		if (event.keyCode === ENTER_KEY_CODE) {
		  event.preventDefault();
		  var text = this.state.text.trim();
		  if (text) {
		  	console.log("message is " + text);
		    //ChatMessageActionCreators.createMessage(text, this.props.threadID);
		  }
		  this.setState({text: ''});
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
			      value={this.state.text}
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
