(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(rows, cols, container) {
  var amountOfTries = 0;
  var a;
  var tiles = [];
  var pairs = 0;
  var turn1 = "";
  var templateDiv = document.querySelectorAll("#memoryContainer template")[0].content.firstElementChild;
  var scoreNode = document.querySelector("#score");

  tiles = getPicArray(rows,cols);
  container = document.querySelector("#memoryContainer");
  var div = document.importNode(templateDiv, false);

  tiles.forEach(function(tile, index) {

    a = document.importNode(templateDiv.firstElementChild, true);
    a.firstElementChild.setAttribute("data-bricknumber", index);
    div.appendChild(a);
    if((index+1) % cols === 0) {
      div.appendChild(document.createElement("br"));
    }

  });

  div.addEventListener("click", function(event){
    event.preventDefault();
    var img = event.target.nodeName = "IMG" ? event.target : event.target.firstElementChild;
    var index = parseInt(img.getAttribute("data-bricknumber"));
    turnBrick(tiles[index],index, img);
  });

  container.appendChild(div);

function turnBrick(tile, index, img) {

  img.src ="image/"+tile+".png";
  var self = img;
  amountOfTries += 1;
  scoreNode.textContent = amountOfTries;

  if (turn1 === "") {
    turn1 = self;
  } else if(self !== turn1){
    if (self.src === turn1.src) {
      console.log("wopppy");
      turn1 = "";
      pairs += 1;
      if(pairs === (cols*rows)/2){
        console.log("WOPP");
      }
    } else {

      setTimeout(function() {
        turn1.src ="image/0.png";
        self.src ="image/0.png";
        turn1 = "";
      }, 1000);

    }
  }
}


};


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

},{}],2:[function(require,module,exports){
var Memory = require("./Memory");
new Memory(4, 4);

},{"./Memory":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjUuMTAuMS9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtZW1vcnkvY2xpZW50L3NvdXJjZS9qcy9NZW1vcnkuanMiLCJtZW1vcnkvY2xpZW50L3NvdXJjZS9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkZBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHJvd3MsIGNvbHMsIGNvbnRhaW5lcikge1xuICB2YXIgYW1vdW50T2ZUcmllcyA9IDA7XG4gIHZhciBhO1xuICB2YXIgdGlsZXMgPSBbXTtcbiAgdmFyIHBhaXJzID0gMDtcbiAgdmFyIHR1cm4xID0gXCJcIjtcbiAgdmFyIHRlbXBsYXRlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNtZW1vcnlDb250YWluZXIgdGVtcGxhdGVcIilbMF0uY29udGVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgdmFyIHNjb3JlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2NvcmVcIik7XG5cbiAgdGlsZXMgPSBnZXRQaWNBcnJheShyb3dzLGNvbHMpO1xuICBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbW9yeUNvbnRhaW5lclwiKTtcbiAgdmFyIGRpdiA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGVEaXYsIGZhbHNlKTtcblxuICB0aWxlcy5mb3JFYWNoKGZ1bmN0aW9uKHRpbGUsIGluZGV4KSB7XG5cbiAgICBhID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0ZW1wbGF0ZURpdi5maXJzdEVsZW1lbnRDaGlsZCwgdHJ1ZSk7XG4gICAgYS5maXJzdEVsZW1lbnRDaGlsZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJyaWNrbnVtYmVyXCIsIGluZGV4KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYSk7XG4gICAgaWYoKGluZGV4KzEpICUgY29scyA9PT0gMCkge1xuICAgICAgZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgfVxuXG4gIH0pO1xuXG4gIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGltZyA9IGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9IFwiSU1HXCIgPyBldmVudC50YXJnZXQgOiBldmVudC50YXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoaW1nLmdldEF0dHJpYnV0ZShcImRhdGEtYnJpY2tudW1iZXJcIikpO1xuICAgIHR1cm5Ccmljayh0aWxlc1tpbmRleF0saW5kZXgsIGltZyk7XG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuXG5mdW5jdGlvbiB0dXJuQnJpY2sodGlsZSwgaW5kZXgsIGltZykge1xuXG4gIGltZy5zcmMgPVwiaW1hZ2UvXCIrdGlsZStcIi5wbmdcIjtcbiAgdmFyIHNlbGYgPSBpbWc7XG4gIGFtb3VudE9mVHJpZXMgKz0gMTtcbiAgc2NvcmVOb2RlLnRleHRDb250ZW50ID0gYW1vdW50T2ZUcmllcztcblxuICBpZiAodHVybjEgPT09IFwiXCIpIHtcbiAgICB0dXJuMSA9IHNlbGY7XG4gIH0gZWxzZSBpZihzZWxmICE9PSB0dXJuMSl7XG4gICAgaWYgKHNlbGYuc3JjID09PSB0dXJuMS5zcmMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwid29wcHB5XCIpO1xuICAgICAgdHVybjEgPSBcIlwiO1xuICAgICAgcGFpcnMgKz0gMTtcbiAgICAgIGlmKHBhaXJzID09PSAoY29scypyb3dzKS8yKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJXT1BQXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHR1cm4xLnNyYyA9XCJpbWFnZS8wLnBuZ1wiO1xuICAgICAgICBzZWxmLnNyYyA9XCJpbWFnZS8wLnBuZ1wiO1xuICAgICAgICB0dXJuMSA9IFwiXCI7XG4gICAgICB9LCAxMDAwKTtcblxuICAgIH1cbiAgfVxufVxuXG5cbn07XG5cblxuZnVuY3Rpb24gZ2V0UGljQXJyYXkocm93cywgY29scykge1xuXG4gIHZhciBhcnIgPSBbXTtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDE7IGkgPD0gKHJvd3MqY29scykvMjsgaSsrKSB7XG4gICAgYXJyLnB1c2goaSk7XG4gICAgYXJyLnB1c2goaSk7XG4gIH1cblxuICBmb3IodmFyIGogPSBhcnIubGVuZ3RoIC0gMTsgaiA+IDA7IGotLSl7XG4gICAgdmFyIGggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaisxKSk7XG4gICAgdmFyIHRlbXAgPSBhcnJbal07XG4gICAgYXJyW2pdID0gYXJyW2hdO1xuICAgIGFycltoXSA9IHRlbXA7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cbiIsInZhciBNZW1vcnkgPSByZXF1aXJlKFwiLi9NZW1vcnlcIik7XHJcbm5ldyBNZW1vcnkoNCwgNCk7XHJcbiJdfQ==
