var React = require('react');
var TextField = require('material-ui/TextField').default;

module.exports = React.createClass({

  render: function () {
    return (
        <TextField type={this.props.type} onChange={this.props.change}
        fullWidth={this.props.fullWidth} required={this.props.required}
        multiLine={this.props.textArea} rows={this.props.row} value={this.props.value}  disabled={this.props.disable}
        hintText={this.props.hint} floatingLabelText={this.props.float}
        floatingLabelStyle={{color: '#f4285f4'}}
        underlineFocusStyle={{borderBottom: 'solid 2px', borderColor: '#4285f4'}}
        />

    )
  }
})




/*

 iconStyle={{ fill: '#FF4081'}}
        floatingLabelStyle={{color: '#fff'}}
        underlineFocusStyle={{borderBottom: 'solid 2px', borderColor: '#4285f4'}}
 */