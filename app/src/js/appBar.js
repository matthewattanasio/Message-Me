import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class AppBarReact extends Component {

	constructor(props) {
		super(props);
		this.state = {open: false};
	}

	//handleToggle = () => this.setState({open: !this.state.open});
  	//handleClose = () => this.setState({open: false});

  	//handleToggle = () => this.setState({open: !this.state.open});

	render() {

		const TheAppBar = () => (
		  <AppBar
		    title="Message Me"
		    iconClassNameRight="muidocs-icon-navigation-expand-more"
		    //onLeftIconButtonTouchTap={this.handleToggle}
		  />
		);

		return (
			<MuiThemeProvider>
			 	<TheAppBar />
			 </MuiThemeProvider>
		);
	}
};

export default AppBarReact;
