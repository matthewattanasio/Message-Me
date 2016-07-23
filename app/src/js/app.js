var React = require('react');
import ReactDOM from 'react-dom';
import MyAwesomeReactComponent from './blah';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var App = React.createClass({
    render: function() {
        return (
		 	     <div>
			<nav className="navbar navbar-inverse">
			  <div className="container">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="#">Project name</a>
			    </div>
			    <div id="navbar" class="collapse navbar-collapse">
			      <ul className="nav navbar-nav">
			        <li className="active"><a href="#">Home</a></li>
			        <li><a href="#about">About</a></li>
			        <li><a href="#contact">Contact</a></li>
			      </ul>
			    </div>
			  </div>
			</nav>
		<div className="container">
		  <div className="row">
            <div className="col-xs-6 col-lg-4 img">
            	<div className="class-item"> </div>
              <p><a className="btn btn-default tags" href="#" role="button">#cat »</a></p>
            </div>
            <div className="col-xs-6 col-lg-4 img">
              <div className="class-item"> </div>
              <p><a className="btn btn-default tags" href="#" role="button">#dog »</a></p>
            </div>
            <div className="col-xs-6 col-lg-4 img">
              <div className="class-item"> </div>
              <p><a className="btn btn-default tags" href="#" role="button">#kiss »</a></p>
            </div>
            <div className="col-xs-6 col-lg-4 img">
              <div className="class-item"> </div>
              <p><a className="btn btn-default tags" href="#" role="button">#sex »</a></p>
            </div>
            <div className="col-xs-6 col-lg-4 img">
              <div className="class-item"> </div>
              <p><a className="btn btn-default tags" href="#" role="button">#weed »</a></p>
            </div>
            <div className="col-xs-6 col-lg-4 img">
              <div className="class-item"> </div>
              <p><a className="btn btn-default tags" href="#" role="button">#shit »</a></p>
            </div>
          </div>
          </div>
          </div>
       	);
    }
});



ReactDOM.render(<App />, document.getElementsByTagName('body')[0]);
