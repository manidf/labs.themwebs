var React = require('react');

var ListItems = React.createClass({
  handleClick: function() {
    this.props.whenItemClicked(this.props.item);
  },
  render: function() {
    return <li className={this.props.className}>
      <a onClick={this.handleClick}>{this.props.item}</a>
    </li>
  }
});

module.exports = ListItems;