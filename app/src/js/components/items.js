import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from "react-redux";
import { fetchMessages } from '../actions/messageActions';

import {
	blue300,
	indigo900,
	orange200,
	deepOrange300,
	pink400,
	purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5};


@connect((store) => {
	return {
		messages: store.messages.messages,
	};
})
class Items extends Component {

	componentWillMount() {
		this.props.dispatch( fetchMessages() )
	}

	render() {
		return (
			 <MuiThemeProvider>
			 	<List>
			 		{this.props.messages.map(function(message){
			 			return <ListItem disabled={true} leftAvatar={<Avatar color={deepOrange300} backgroundColor={purple500} size={30} style={style}>{message.name.charAt(0)}</Avatar>}>{message.msg}</ListItem>;
			 		})}
			 	</List>
			 </MuiThemeProvider>
		);
	}
}

export default Items;
