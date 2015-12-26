var React = require('react');

var Badge = React.createClass({
   render: function() {
      return (
         <button className="mdl-button mdl-js-button mdl-button--raised" type="button">
            <span className="mdl-badge" data-badge={this.props.number}> TEST{this.props.title}</span>
         </button>
      )
   }
});

module.exports = Badge;