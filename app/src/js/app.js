var React = require('react');

var App = React.createClass({
    render: function() {
        return (<p>Hello {this.props.name}!</p>);
    }
});


React.render(<App />, document.getElementsByTagName('body')[0]);
