var React = require('react');

var Button = React.createClass({
   render: function() {
      return (
         <button className={"mdl-button mdl-js-button " + this.props.className} type="button">
            <span className={this.props.subTitleclassName} data-badge={this.props.subTitle}>
               {this.props.title}
            </span>
         </button>
      )
   }
});

module.exports = Button;