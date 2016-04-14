(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(rows, cols, container) {

  var a;
  var tiles = [];
  var turn1 = "";
  var turn2;
  tiles = getPicArray(rows,cols);

  container = document.querySelector("#memoryContainer");
  var template = document.querySelectorAll("#memoryContainer template")[0].content.firstElementChild;

tiles.forEach(function(tile, index) {

    a = document.importNode(template, true);

    container.appendChild(a);

    a.addEventListener("click", function(){
      turnBrick.call(this,tile,index);
    });

    if((index+1) % cols === 0) {
      container.appendChild(document.createElement("br"));
    }

  });


function turnBrick(tile, index) {

  this.querySelector("img").src ="image/"+tile+".png";
  var self = this.querySelector("img");

  if (turn1 === "") {
    turn1 = self;
  } else {
    if (self.src === turn1.src) {
      console.log("wopppy");
      turn1 = "";
    } else {

      setTimeout(function() {
        turn1.src ="image/0.png";
        self.src ="image/0.png";
        turn1 = "";
      }, 1000);

    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjUuMTAuMS9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtZW1vcnkvY2xpZW50L3NvdXJjZS9qcy9NZW1vcnkuanMiLCJtZW1vcnkvY2xpZW50L3NvdXJjZS9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocm93cywgY29scywgY29udGFpbmVyKSB7XG5cbiAgdmFyIGE7XG4gIHZhciB0aWxlcyA9IFtdO1xuICB2YXIgdHVybjEgPSBcIlwiO1xuICB2YXIgdHVybjI7XG4gIHRpbGVzID0gZ2V0UGljQXJyYXkocm93cyxjb2xzKTtcblxuICBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbW9yeUNvbnRhaW5lclwiKTtcbiAgdmFyIHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtZW1vcnlDb250YWluZXIgdGVtcGxhdGVcIilbMF0uY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcblxudGlsZXMuZm9yRWFjaChmdW5jdGlvbih0aWxlLCBpbmRleCkge1xuXG4gICAgYSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGUsIHRydWUpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGEpO1xuXG4gICAgYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgIHR1cm5Ccmljay5jYWxsKHRoaXMsdGlsZSxpbmRleCk7XG4gICAgfSk7XG5cbiAgICBpZigoaW5kZXgrMSkgJSBjb2xzID09PSAwKSB7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICB9XG5cbiAgfSk7XG5cblxuZnVuY3Rpb24gdHVybkJyaWNrKHRpbGUsIGluZGV4KSB7XG5cbiAgdGhpcy5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLnNyYyA9XCJpbWFnZS9cIit0aWxlK1wiLnBuZ1wiO1xuICB2YXIgc2VsZiA9IHRoaXMucXVlcnlTZWxlY3RvcihcImltZ1wiKTtcblxuICBpZiAodHVybjEgPT09IFwiXCIpIHtcbiAgICB0dXJuMSA9IHNlbGY7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHNlbGYuc3JjID09PSB0dXJuMS5zcmMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwid29wcHB5XCIpO1xuICAgICAgdHVybjEgPSBcIlwiO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHR1cm4xLnNyYyA9XCJpbWFnZS8wLnBuZ1wiO1xuICAgICAgICBzZWxmLnNyYyA9XCJpbWFnZS8wLnBuZ1wiO1xuICAgICAgICB0dXJuMSA9IFwiXCI7XG4gICAgICB9LCAxMDAwKTtcblxuICAgIH1cbiAgfVxufVxuXG4gIGZ1bmN0aW9uIGdldFBpY0FycmF5KHJvd3MsIGNvbHMpIHtcblxuICAgIHZhciBhcnIgPSBbXTtcbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSAxOyBpIDw9IChyb3dzKmNvbHMpLzI7IGkrKykge1xuICAgICAgYXJyLnB1c2goaSk7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG5cbiAgICBmb3IodmFyIGogPSBhcnIubGVuZ3RoIC0gMTsgaiA+IDA7IGotLSl7XG4gICAgICB2YXIgaCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChqKzEpKTtcbiAgICAgIHZhciB0ZW1wID0gYXJyW2pdO1xuICAgICAgYXJyW2pdID0gYXJyW2hdO1xuICAgICAgYXJyW2hdID0gdGVtcDtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG5cblxufTtcbiIsInZhciBNZW1vcnkgPSByZXF1aXJlKFwiLi9NZW1vcnlcIik7XHJcbm5ldyBNZW1vcnkoNCwgNCk7XHJcbiJdfQ==
