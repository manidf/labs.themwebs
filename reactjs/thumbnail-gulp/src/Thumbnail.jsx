// Define thumbnail
var Thumbnail = React.createClass({
   render: function() {
      return (
         <div className="mdl-cell mdl-cell--4-col">
            <div className="demo-card-wide mdl-card mdl-shadow--2dp">
               <div className="mdl-card__title">
                  <h2 className="mdl-card__title-text">{this.props.header}</h2>
                  <img className="mdl-card__img" src={this.props.imgURL} alt={this.props.header} />
               </div>
               <div className="mdl-card__supporting-text">
                  {this.props.description}
               </div>
               <div className="mdl-card__actions mdl-card--border">
                  <Badge title={this.props.title} number={this.props.number} />
               </div>
               <div className="mdl-card__menu">
                  <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                     <i className="material-icons">share</i>
                  </button>
               </div>
            </div>
         </div>
      )
   }
});