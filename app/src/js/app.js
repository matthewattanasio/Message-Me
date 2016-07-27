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

//import chatExampleData from './ChatExampleData';
//chatExampleData.init() // load all data from local storage

// store.dispatch((dispatcher) => {
// 	dispatcher({type: 'FETCH_MESSAGES'});
// 	dispatcher({type: 'RECIEVED_MESSAGES'});
// 	//dispatcher({type: 'FETCH_MESSAGES_ERROR'});
// });

class App extends React.Component {

    render() {
        return (
        	<Provider store={store}>
	        	<div>
	        		<InitialScreen />
	        		<AppBarReact />
	        		<Items />
	        		<TextArea />
	        		<div className="footer">
	        			&copy; Message Me
	        		</div>
	        	</div>
	        </Provider>
      );
    }
};

ReactDOM.render(<App />, document.getElementById('container'));
