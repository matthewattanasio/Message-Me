import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from "react-redux";
import { fetchMessages } from '../actions/messageActions';
import { changeListHeight } from '../actions/appActions';


import {
	blue300,
	indigo900,
	orange200,
	deepOrange300,
	pink400,
	purple500,
} from 'material-ui/styles/colors';

@connect((store) => {
	return {
		messages: store.messages.messages,
		app: store.app
	};
})
class Items extends Component {

	constructor(props) {
		super(props);
    	this.props.dispatch( changeListHeight( window.innerHeight ) );
  	}

	componentWillMount() {
		this.props.dispatch( fetchMessages() );
	}

	componentDidMount() {
    	window.addEventListener('resize', this.handleResize.bind(this) ); //event to handle resizing the message list
    	//this.props.subscribe(  );
  	}

  	handleResize() {
    	this.props.dispatch( changeListHeight( window.innerHeight ) );
  	}

  	handleScroll() {
  		let isScrolledToBottom = this.refs.chatList.scrollHeight - this.refs.chatList.clientHeight <= this.refs.chatList.scrollTop + 1;

  		if(isScrolledToBottom) {
    		this.refs.chatList.scrollTop = this.refs.chatList.scrollHeight - this.refs.chatList.clientHeight;
  		}
  	}

	render() {

		let listStyle = {
			height: (this.props.app.chatListHeight - (35 + 64 + 8 + 135)),
			overflowY: "auto"
		}

		let listItemStyle = {
			margin: 5,
		};

		return (
			 <MuiThemeProvider>
			 	<li
			 		className="chat-list"
			 		style={listStyle}
			 		ref="chatList"
			 		onScroll={this.handleScroll.bind(this)}
			 		>
			 		{this.props.messages.map(function(message){
			 			return <ListItem
			 				key={message.id}
			 				disabled={true}
			 				leftAvatar={
			 					<Avatar
			 						color={deepOrange300}
			 						backgroundColor={purple500}
			 						size={30}
			 						style={listItemStyle}
			 					>
			 					{message.name.charAt(0)}
			 					</Avatar>
			 				}>
			 				{message.msg}
			 			</ListItem>;
			 		})}
			 	</li>
			 </MuiThemeProvider>
		);
	}
}

export default Items;
