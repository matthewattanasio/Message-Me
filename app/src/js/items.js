import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
	blue300,
	indigo900,
	orange200,
	deepOrange300,
	pink400,
	purple500,
} from 'material-ui/styles/colors';

const style = {margin: 5};

class Items extends Component {

	render() {

		const TheItems = () => (
		  	<List>
				<ListItem
			      disabled={true}
			      leftAvatar={
			        <Avatar
			          color={deepOrange300}
			          backgroundColor={purple500}
			          size={30}
			          style={style}
			        >M
			        </Avatar>
			      }
			    >Matt is fucking awesome
			    </ListItem>
		  	</List>
		);

		return (
			 <MuiThemeProvider>
			 	<TheItems />
			 </MuiThemeProvider>
		);
	}
}

export default Items;
