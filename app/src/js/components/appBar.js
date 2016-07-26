import React, {Component} from 'react';
import { Drawer, AppBar, MenuItem} from 'material-ui'
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
	              <MenuItem onTouchTap={this.handleClose.bind(this)}>Fuck Yeah</MenuItem>
	              <MenuItem onTouchTap={this.handleClose.bind(this)}>Mad Dog</MenuItem>
	              <MenuItem onTouchTap={this.handleClose.bind(this)}>Legend</MenuItem>
	            </Drawer>
				<TheAppBar />
			</header>
			</MuiThemeProvider>
		);
	}
};

export default AppBarReact;
