import React from 'react';
import { Dialog, FlatButton, RaisedButton, TextField } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { connect } from "react-redux";
import { fetchUser, setUserName, registerUser } from '../actions/userActions';

const ENTER_KEY_CODE = 13;
const customContentStyle = {};

@connect((store) => {
	return {
		user: store.user
	};
})
class InitialScreen extends React.Component {

  	componentWillMount() {
		this.props.dispatch( fetchUser() );
	}

	handleClose() {
		if( this.props.user.user.name.length ) {
			this.props.dispatch( registerUser() );
		} else {
			alert("Enter a User name");
		}
	};

	_onChange(event, value) {
	    this.props.dispatch( setUserName(value) );
	}

	_onKeyDown(event) {
		if (event.keyCode === ENTER_KEY_CODE) {
		  event.preventDefault();
		  if( this.props.user.user.name.length ) {
		  	this.handleClose();
		  }
		}
	}

	render() {
		const actions = [
			<FlatButton
				label="Submit"
				primary={true}
				onTouchTap={this.handleClose}
			/>,
		];

		return (
			<MuiThemeProvider>
				<Dialog
				  title="Welcome to Message Me"

				  modal={true}
				  contentStyle={customContentStyle}
				  open={!this.props.user.hasRegistered}
				>
				  <p>Please enter your name to begin chatting to people from around the world.</p>
				  <TextField
				  	hintText="Enter User Name"
				  	onChange={this._onChange.bind(this)}
			      	onKeyDown={this._onKeyDown.bind(this)}
				  />
				</Dialog>
			</MuiThemeProvider>
		);
	}
}

export default InitialScreen;
