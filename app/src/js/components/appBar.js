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
				    showMenuIconButton={false}
				    className="appBar"
				  />
			</header>
			</MuiThemeProvider>
		);
	}
};

export default AppBarReact;
