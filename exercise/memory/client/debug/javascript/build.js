(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(rows, cols, container) {
  var amountOfTries = 0;
  var a;
  var tiles = [];
  var turn1 = "";
  tiles = getPicArray(rows,cols);

  container = document.querySelector("#memoryContainer");
  var template = document.querySelectorAll("#memoryContainer template")[0].content.firstElementChild;
  var scoreNode = document.querySelector("#score");
  console.log(scoreNode);
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
  amountOfTries += 1;
  scoreNode.textContent = amountOfTries;

  if (turn1 === "") {
    turn1 = self;
  } else if(self !== turn1){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjUuMTAuMS9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtZW1vcnkvY2xpZW50L3NvdXJjZS9qcy9NZW1vcnkuanMiLCJtZW1vcnkvY2xpZW50L3NvdXJjZS9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHJvd3MsIGNvbHMsIGNvbnRhaW5lcikge1xuICB2YXIgYW1vdW50T2ZUcmllcyA9IDA7XG4gIHZhciBhO1xuICB2YXIgdGlsZXMgPSBbXTtcbiAgdmFyIHR1cm4xID0gXCJcIjtcbiAgdGlsZXMgPSBnZXRQaWNBcnJheShyb3dzLGNvbHMpO1xuXG4gIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVtb3J5Q29udGFpbmVyXCIpO1xuICB2YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI21lbW9yeUNvbnRhaW5lciB0ZW1wbGF0ZVwiKVswXS5jb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICB2YXIgc2NvcmVOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzY29yZVwiKTtcbiAgY29uc29sZS5sb2coc2NvcmVOb2RlKTtcbnRpbGVzLmZvckVhY2goZnVuY3Rpb24odGlsZSwgaW5kZXgpIHtcblxuICAgIGEgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLCB0cnVlKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhKTtcblxuICAgIGEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgICB0dXJuQnJpY2suY2FsbCh0aGlzLHRpbGUsaW5kZXgpO1xuICAgIH0pO1xuXG4gICAgaWYoKGluZGV4KzEpICUgY29scyA9PT0gMCkge1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgfVxuXG4gIH0pO1xuXG5cbmZ1bmN0aW9uIHR1cm5Ccmljayh0aWxlLCBpbmRleCkge1xuXG4gIHRoaXMucXVlcnlTZWxlY3RvcihcImltZ1wiKS5zcmMgPVwiaW1hZ2UvXCIrdGlsZStcIi5wbmdcIjtcbiAgdmFyIHNlbGYgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gIGFtb3VudE9mVHJpZXMgKz0gMTtcbiAgc2NvcmVOb2RlLnRleHRDb250ZW50ID0gYW1vdW50T2ZUcmllcztcblxuICBpZiAodHVybjEgPT09IFwiXCIpIHtcbiAgICB0dXJuMSA9IHNlbGY7XG4gIH0gZWxzZSBpZihzZWxmICE9PSB0dXJuMSl7XG4gICAgaWYgKHNlbGYuc3JjID09PSB0dXJuMS5zcmMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwid29wcHB5XCIpO1xuICAgICAgdHVybjEgPSBcIlwiO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHR1cm4xLnNyYyA9XCJpbWFnZS8wLnBuZ1wiO1xuICAgICAgICBzZWxmLnNyYyA9XCJpbWFnZS8wLnBuZ1wiO1xuICAgICAgICB0dXJuMSA9IFwiXCI7XG4gICAgICB9LCAxMDAwKTtcblxuICAgIH1cbiAgfVxufVxuXG4gIGZ1bmN0aW9uIGdldFBpY0FycmF5KHJvd3MsIGNvbHMpIHtcblxuICAgIHZhciBhcnIgPSBbXTtcbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSAxOyBpIDw9IChyb3dzKmNvbHMpLzI7IGkrKykge1xuICAgICAgYXJyLnB1c2goaSk7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG5cbiAgICBmb3IodmFyIGogPSBhcnIubGVuZ3RoIC0gMTsgaiA+IDA7IGotLSl7XG4gICAgICB2YXIgaCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChqKzEpKTtcbiAgICAgIHZhciB0ZW1wID0gYXJyW2pdO1xuICAgICAgYXJyW2pdID0gYXJyW2hdO1xuICAgICAgYXJyW2hdID0gdGVtcDtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG5cblxufTtcbiIsInZhciBNZW1vcnkgPSByZXF1aXJlKFwiLi9NZW1vcnlcIik7XHJcbm5ldyBNZW1vcnkoNCwgNCk7XHJcbiJdfQ==
