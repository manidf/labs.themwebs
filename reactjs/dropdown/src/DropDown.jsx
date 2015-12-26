// We need to show a button
// this component should know when to show the list
// based on when the user clicks on a button

var React = require('react');
var Button = require('./Button');
//var List = require('./list');

var DropDown = React.createClass({
   render: function() {
      return (
         <div className="dropdown">
            <Button className="mdl-button--raised mdl-js-ripple-effect" title="this.props.title" subTitleClassName="mdl-badge" />
         </div>
      )
   }
});

module.exports = DropDown;