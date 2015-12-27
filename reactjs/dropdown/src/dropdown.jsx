// We need to show a button and a list
// This component should know when to show the list
// based on when the user clicks on a button

var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function() {
    // good
    this.setState({ open: !this.state.open });

    // bad. never directly manipulate the state property
    //this.state.open = false;
    console.log('Button: Clicked!');
  },
  getInitialState: function() {
    return { open: false }
  },
  handleItemClick: function(item) {
    this.setState({
      open: false,
      itemTitle: item
    });
    console.log(item);
  },
  render: function() {
    // map through a the list of items in options
    var list = this.props.items.map(function(item) {
      return <ListItem
              item={item}
              whenItemClicked={this.handleItemClick}
              className={this.state.itemTitle === item ? "active" : "" }
              />
    }.bind(this));

    return <div className="dropdown">
      <Button
         whenClicked={this.handleClick}
         className="btn-default"
         title={this.state.itemTitle || this.props.title}
         subTitleClassName="caret"
      />
      <ul className={"dropdown-menu " + (this.state.open ? "show" : " ")  }>
        {list}
      </ul>
    </div>
  }
});
