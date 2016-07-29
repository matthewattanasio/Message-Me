import React from 'react';
import ReactDOM from 'react-dom';
import AppBarReact from './appBar';
import Items from './items';
import TextArea from './textArea';
import InitialScreen from './dialog';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {

    render() {
        return (
    		<div class="wrapper">
        		<InitialScreen />
        		<AppBarReact />
	        	<div class="wrapper-chat">
	        		<Items />
	        		<TextArea />
	        	</div>
	        	<footer className="footer">
        			Created By Matthew Attanasio - <a href="http://skyfoundry.agency" target="_blank">Sky Foundry</a> | <a href="http://skyfoundry.agency" target="_blank">GitHub</a>
        		</footer>
	        </div>
      	);
    }
};

export default App;
