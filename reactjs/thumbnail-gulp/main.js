(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/mannuelferreira/workspace/labs.themwebs/reactjs/thumbnail-gulp/src/app.jsx":[function(require,module,exports){

var options = {
   thumbnailData: [{
      id: 1,
      title: 'Beijing',
      number: 1,
      header: 'Visit Beijing',
      description: 'Wangfujing Street is one of the busiest shopping streets in Beijing with nearly 100,000 visitors daily (August 2008). The sale of consumer goods both retail ...',
      imgURL: '../assets/Wangfujing_street_Beijing.jpg'
   },{
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

},{}]},{},["/Users/mannuelferreira/workspace/labs.themwebs/reactjs/thumbnail-gulp/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWFubnVlbGZlcnJlaXJhL3dvcmtzcGFjZS9sYWJzLnRoZW13ZWJzL3JlYWN0anMvdGh1bWJuYWlsLWd1bHAvc3JjL2FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBLElBQUksT0FBTyxHQUFHO0dBQ1gsYUFBYSxFQUFFLENBQUM7TUFDYixFQUFFLEVBQUUsQ0FBQztNQUNMLEtBQUssRUFBRSxTQUFTO01BQ2hCLE1BQU0sRUFBRSxDQUFDO01BQ1QsTUFBTSxFQUFFLGVBQWU7TUFDdkIsV0FBVyxFQUFFLGtLQUFrSztNQUMvSyxNQUFNLEVBQUUseUNBQXlDO0lBQ25ELENBQUM7TUFDQyxFQUFFLEVBQUUsQ0FBQztNQUNMLEtBQUssRUFBRSxVQUFVO01BQ2pCLE1BQU0sRUFBRSxFQUFFO01BQ1YsTUFBTSxFQUFFLGdCQUFnQjtNQUN4QixXQUFXLEVBQUUsd0VBQXdFO01BQ3JGLE1BQU0sRUFBRSw2QkFBNkI7SUFDdkMsQ0FBQztBQUNMLENBQUMsQ0FBQzs7QUFFRixlQUFlO0FBQ2YsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7O0FBRTFELHVCQUF1QjtBQUN2QixRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxudmFyIG9wdGlvbnMgPSB7XG4gICB0aHVtYm5haWxEYXRhOiBbe1xuICAgICAgaWQ6IDEsXG4gICAgICB0aXRsZTogJ0JlaWppbmcnLFxuICAgICAgbnVtYmVyOiAxLFxuICAgICAgaGVhZGVyOiAnVmlzaXQgQmVpamluZycsXG4gICAgICBkZXNjcmlwdGlvbjogJ1dhbmdmdWppbmcgU3RyZWV0IGlzIG9uZSBvZiB0aGUgYnVzaWVzdCBzaG9wcGluZyBzdHJlZXRzIGluIEJlaWppbmcgd2l0aCBuZWFybHkgMTAwLDAwMCB2aXNpdG9ycyBkYWlseSAoQXVndXN0IDIwMDgpLiBUaGUgc2FsZSBvZiBjb25zdW1lciBnb29kcyBib3RoIHJldGFpbCAuLi4nLFxuICAgICAgaW1nVVJMOiAnLi4vYXNzZXRzL1dhbmdmdWppbmdfc3RyZWV0X0JlaWppbmcuanBnJ1xuICAgfSx7XG4gICAgICBpZDogMixcbiAgICAgIHRpdGxlOiAnU2hhbmdoYWknLFxuICAgICAgbnVtYmVyOiAyNSxcbiAgICAgIGhlYWRlcjogJ1Zpc2l0IFNoYW5naGFpJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2hhbmdoYWkgQ2l0eSBIYWxsLCBTaGFuZ2hhaSBDaGVuaHVhbmdtaWFvIHRoZSBZdXl1YW4gR2FyZGVuIEJhemFyIC4uLicsXG4gICAgICBpbWdVUkw6ICcuLi9hc3NldHMveXV5dWFuLWdhcmRlbi5qcGcnXG4gICB9XVxufTtcblxuLy8gUmVuZGVyIGNsYXNzXG52YXIgZWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGh1bWJuYWlsTGlzdCwgb3B0aW9ucyk7XG5cbi8vIHBsYWNlIGl0IG9uIHRoZSBwYWdlXG5SZWFjdERPTS5yZW5kZXIoZWxlbWVudCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhcmdldCcpKTsiXX0=
