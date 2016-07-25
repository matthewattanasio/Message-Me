import React, {Component} from 'react';
import { Drawer, AppBar, MenuItem} from 'material-ui'
//import Drawer from 'material-ui/Drawer';
//import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class AppBarReact extends Component {

	constructor(props) {
		super(props);
		this.state = {open: false};
	}

  	handleToggle() {
  		this.setState({open: !this.state.open});
  	}

  	handleClose() {
  		this.setState({open: false});
  	}

	render() {

		const TheAppBar = () => (
		  <AppBar
		    title="Message Me"
		    iconClassNameRight="muidocs-icon-navigation-expand-more"
		    onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
		  />
		);

		return (
			<MuiThemeProvider>
			<header>
				<Drawer
	              docked={false}
	              open={this.state.open}>
	              <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item 1</MenuItem>
	              <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item 2</MenuItem>
	              <MenuItem onTouchTap={this.handleClose.bind(this)}>Menu Item 3</MenuItem>
	            </Drawer>
				<TheAppBar />
			</header>
			</MuiThemeProvider>
		);
	}

};

export default AppBarReact;
