import React, {Component} from 'react';
import {Avatar, List, ListItem} from 'material-ui/Avatar';
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
		user: store.user.user,
		app: store.app,
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

	componentWillUpdate() {
	  let node = this.refs.chatList;
	  this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
	}

	componentDidUpdate() {
	  if (this.shouldScrollBottom) {
	    var node = this.refs.chatList;
	    node.scrollTop = node.scrollHeight;
	  }
	}

	componentDidMount() {
    	window.addEventListener('resize', this.handleResize.bind(this) ); //event to handle resizing the message list
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

		const theProps = this.props;

		return (
			 <MuiThemeProvider>
			 	<ul
			 		className="chat-list"
			 		style={listStyle}
			 		ref="chatList"
			 		>
			 		{this.props.messages.map( function(message) {
			 			const messageClass = ( message.userId !== theProps.user.id ) ? 'is-response' : '';
			 			return <li
			 				key={message.id}
			 				className={messageClass}
			 				>
			 				<span>{message.name.charAt(0)}</span>{message.msg}
			 			</li>
			 		})}
				</ul>
			</MuiThemeProvider>
		);
	}
}

export default Items;
