var React = require('react');
var RaisedButtons = require('material-ui/RaisedButton').default;
var FontIcon = require('material-ui/FontIcon').default;

module.exports = React.createClass({
  render: function () {
    return (
      <div>
      //margin-12
        <RaisedButtons className={this.props.className} label={this.props.label}/>
      </div>
    )
  }
})