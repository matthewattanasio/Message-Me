var React = require('react');
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Import Files
import AppBarReact from './appBar';
import Items from './items';
import TextArea from './textArea';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component {

    render() {
        return (
        	<div>
        		<AppBarReact />
        		<Items />
        		<TextArea />
        		<div className="footer">
        			&copy; Message Me
        		</div>
        	</div>
      );
    }
};



ReactDOM.render(<App />, document.getElementById('container'));
