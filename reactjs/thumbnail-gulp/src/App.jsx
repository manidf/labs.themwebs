var React = require('react');
var ReactDOM = require('react-dom');
var ThumbnailList = require('./ThumbnailList');

var options = {
   thumbnailData: [{
      id: 1,
      title: 'Beijing',
      number: 1,
      header: 'Visit Beijing',
      description: 'Wangfujing Street is one of the busiest shopping streets in Beijing with nearly 100,000 visitors daily (August 2008). The sale of consumer goods both retail ...',
      imgURL: '../assets/Wangfujing_street_Beijing.jpg'
   },
      {
         id: 2,
         title: 'Shanghai',
         number: 25,
         header: 'Visit Shanghai',
         description: 'Shanghai City Hall, Shanghai Chenhuangmiao the Yuyuan Garden Bazar ...',
         imgURL: '../assets/yuyuan-garden.jpg'
      }]
};

// Render class
var element = React.createElement(ThumbnailList, options);

// place it on the page
ReactDOM.render(element, document.querySelector('.target'));