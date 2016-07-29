import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//Import Component files
import AppBarReact from './components/appBar';
import Items from './components/items';
import TextArea from './components/textArea';
import InitialScreen from './components/dialog';

//Import the store component
import store from "./store";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // Needed for onTouchTap http://stackoverflow.com/a/34015469/988941

class App extends React.Component {

    render() {
        return (
        	<Provider store={store}>
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
	        </Provider>
      	);
    }
};

ReactDOM.render(<App />, document.getElementById('container'));
