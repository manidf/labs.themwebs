var React = require('react');
var ReactDOM = require('react-dom');
var Dropdown = require('./DropDown');

var options = {
   title: 'Choose a city', // what should show up in the open/close
   items: [
      'Beijing',
      'Shanghai',
      'Hong Kong',
      'Guangzhou'
   ],
   subTitle: 'hello'
};

// Render class
var element = React.createElement(Dropdown, options);

// place it on the page
ReactDOM.render(element, document.querySelector('.target'));