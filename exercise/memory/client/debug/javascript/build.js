(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(rows, cols, container) {

  var i;
  var img;
  var tiles = [];
  tiles = getPicArray(rows,cols);

  container = document.querySelector("#memoryContainer");
  var template = document.querySelectorAll("#memoryContainer template")[0].content.firstElementChild;

  for(i = 0; i < rows*cols; i++) {

    img = document.importNode(template, true);

    container.appendChild(img);

    addClick(i);

    if((i+1) % cols === 0) {
      container.appendChild(document.createElement("br"));
    }

  }

  function addClick(index) {
    img.addEventListener("click", function(){
      console.log(index);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjUuMTAuMS9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtZW1vcnkvY2xpZW50L3NvdXJjZS9qcy9NZW1vcnkuanMiLCJtZW1vcnkvY2xpZW50L3NvdXJjZS9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocm93cywgY29scywgY29udGFpbmVyKSB7XG5cbiAgdmFyIGk7XG4gIHZhciBpbWc7XG4gIHZhciB0aWxlcyA9IFtdO1xuICB0aWxlcyA9IGdldFBpY0FycmF5KHJvd3MsY29scyk7XG5cbiAgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW1vcnlDb250YWluZXJcIik7XG4gIHZhciB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbWVtb3J5Q29udGFpbmVyIHRlbXBsYXRlXCIpWzBdLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgZm9yKGkgPSAwOyBpIDwgcm93cypjb2xzOyBpKyspIHtcblxuICAgIGltZyA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBhZGRDbGljayhpKTtcblxuICAgIGlmKChpKzEpICUgY29scyA9PT0gMCkge1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBhZGRDbGljayhpbmRleCkge1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBpY0FycmF5KHJvd3MsIGNvbHMpIHtcblxuICAgIHZhciBhcnIgPSBbXTtcbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSAxOyBpIDw9IChyb3dzKmNvbHMpLzI7IGkrKykge1xuICAgICAgYXJyLnB1c2goaSk7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG5cbiAgICBmb3IodmFyIGogPSBhcnIubGVuZ3RoIC0gMTsgaiA+IDA7IGotLSl7XG4gICAgICB2YXIgaCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChqKzEpKTtcbiAgICAgIHZhciB0ZW1wID0gYXJyW2pdO1xuICAgICAgYXJyW2pdID0gYXJyW2hdO1xuICAgICAgYXJyW2hdID0gdGVtcDtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG5cblxufTtcbiIsInZhciBNZW1vcnkgPSByZXF1aXJlKFwiLi9NZW1vcnlcIik7XHJcbm5ldyBNZW1vcnkoNCwgNCk7XHJcbiJdfQ==
