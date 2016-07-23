var React = require('react');
import ReactDOM from 'react-dom';
import MyAwesomeReactComponent from './blah';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var App = React.createClass({
    render: function() {
        return (
		  <MuiThemeProvider>
		    <MyAwesomeReactComponent />
		  </MuiThemeProvider>
       	);
    }
});



ReactDOM.render(<App />, document.getElementsByTagName('body')[0]);
