var React = require('react');
var Thumbnail = require('./Thumbnail');

// Define Thumbnail list
var ThumbnailList = React.createClass({
   render: function() {
      var list = this.props.thumbnailData.map(function(thumbnailProps){
         return <Thumbnail {...thumbnailProps} />
      });

      return <div>
         {list}
      </div>
   }
});

module.exports = ThumbnailList;