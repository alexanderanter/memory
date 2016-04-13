(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(rows, cols, container) {

  var i;
  var img;
  var tiles = [];
  tiles = getPicArray(rows,cols);

  container = document.querySelector("#memoryContainer");

  for(i = 0; i < rows*cols; i++) {
    img = document.createElement("img");
    img.setAttribute("src", "image/0.png");
    container.appendChild(img);

    if((i+1) % cols === 0) {
      container.appendChild(document.createElement("br"));
    }
  }

  function getPicArray(rows, cols) {

    var arr = [];
    var i;
    for (i = 1; i <= (rows*cols)/2; i++) {
      arr.push(i);
      arr.push(i);
    }

    for(var j = arr.length - 1; j > 0; j--){
      var h = Math.floor(Math.random() * (j+1));
      var temp = arr[j];
      arr[j] = arr[h];
      arr[h] = temp;
    }
    return arr;
  }



};

},{}],2:[function(require,module,exports){
var Memory = require("./Memory");
new Memory(4, 4);

},{"./Memory":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjUuMTAuMS9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtZW1vcnkvY2xpZW50L3NvdXJjZS9qcy9NZW1vcnkuanMiLCJtZW1vcnkvY2xpZW50L3NvdXJjZS9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyb3dzLCBjb2xzLCBjb250YWluZXIpIHtcblxuICB2YXIgaTtcbiAgdmFyIGltZztcbiAgdmFyIHRpbGVzID0gW107XG4gIHRpbGVzID0gZ2V0UGljQXJyYXkocm93cyxjb2xzKTtcblxuICBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbW9yeUNvbnRhaW5lclwiKTtcblxuICBmb3IoaSA9IDA7IGkgPCByb3dzKmNvbHM7IGkrKykge1xuICAgIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImltYWdlLzAucG5nXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgaWYoKGkrMSkgJSBjb2xzID09PSAwKSB7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQaWNBcnJheShyb3dzLCBjb2xzKSB7XG5cbiAgICB2YXIgYXJyID0gW107XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMTsgaSA8PSAocm93cypjb2xzKS8yOyBpKyspIHtcbiAgICAgIGFyci5wdXNoKGkpO1xuICAgICAgYXJyLnB1c2goaSk7XG4gICAgfVxuXG4gICAgZm9yKHZhciBqID0gYXJyLmxlbmd0aCAtIDE7IGogPiAwOyBqLS0pe1xuICAgICAgdmFyIGggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaisxKSk7XG4gICAgICB2YXIgdGVtcCA9IGFycltqXTtcbiAgICAgIGFycltqXSA9IGFycltoXTtcbiAgICAgIGFycltoXSA9IHRlbXA7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuXG5cbn07XG4iLCJ2YXIgTWVtb3J5ID0gcmVxdWlyZShcIi4vTWVtb3J5XCIpO1xyXG5uZXcgTWVtb3J5KDQsIDQpO1xyXG4iXX0=
