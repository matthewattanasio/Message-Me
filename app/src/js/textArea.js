import React, {Component} from 'react';
import { TextField, FloatingActionButton, ContentAdd } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class textArea extends Component {

	render() {

		return (
			<MuiThemeProvider>
			<div className="chat">
				<TextField
			      hintText="Try Saying Hello"
			      floatingLabelText="Say Something"
			      multiLine={true}
			      rows={1}
			      className="chat-box" />
			    <FloatingActionButton>
			      Send
			    </FloatingActionButton>
			</div>
		    </MuiThemeProvider>
	    );
	}
}
