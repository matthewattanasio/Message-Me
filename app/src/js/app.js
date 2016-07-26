import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";

import reducers from './reducers';

//Import Component files
import AppBarReact from './components/appBar';
import Items from './components/items';
import TextArea from './components/textArea';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // Needed for onTouchTap http://stackoverflow.com/a/34015469/988941

var testData = {
	user: { name: "matt" },
	messages: [1,2,3]
};

let store  = createStore(reducers, testData);


store.subscribe(() => {
	console.log("store Changed", store.getState());
});

store.dispatch({type: "CHANGE_NAME", payload: "Bob" });
store.dispatch({type: "CHANGE_NAME", payload: "Bill" });
store.dispatch({type: "ADD_MESSAGE", payload: ["this is a test"] });



class App extends React.Component {

    render() {
        return (
        	<Provider store={store}>
	        	<div>
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
