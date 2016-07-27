import React, {Component} from 'react';
import { Drawer, AppBar, MenuItem} from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class AppBarReact extends Component {

	render() {

		return (
			<MuiThemeProvider>
			<header>
				<AppBar
				    title="Message Me"
				    iconClassNameRight="muidocs-icon-navigation-expand-more"
				  />
			</header>
			</MuiThemeProvider>
		);
	}
};

export default AppBarReact;
