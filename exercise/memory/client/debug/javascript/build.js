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
      turn1 = "";
      pairs += 1;
      if(pairs === (cols*rows)/2){
        console.log("finished the game!");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2hvbWUvdmFncmFudC8ubnZtL3ZlcnNpb25zL25vZGUvdjUuMTAuMS9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtZW1vcnkvY2xpZW50L3NvdXJjZS9qcy9NZW1vcnkuanMiLCJtZW1vcnkvY2xpZW50L3NvdXJjZS9qcy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyb3dzLCBjb2xzLCBjb250YWluZXIpIHtcbiAgdmFyIGFtb3VudE9mVHJpZXMgPSAwO1xuICB2YXIgYTtcbiAgdmFyIHRpbGVzID0gW107XG4gIHZhciBwYWlycyA9IDA7XG4gIHZhciB0dXJuMSA9IFwiXCI7XG4gIHZhciB0ZW1wbGF0ZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbWVtb3J5Q29udGFpbmVyIHRlbXBsYXRlXCIpWzBdLmNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIHZhciBzY29yZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Njb3JlXCIpO1xuXG4gIHRpbGVzID0gZ2V0UGljQXJyYXkocm93cyxjb2xzKTtcbiAgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW1vcnlDb250YWluZXJcIik7XG4gIHZhciBkaXYgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlRGl2LCBmYWxzZSk7XG5cbiAgdGlsZXMuZm9yRWFjaChmdW5jdGlvbih0aWxlLCBpbmRleCkge1xuXG4gICAgYSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGVEaXYuZmlyc3RFbGVtZW50Q2hpbGQsIHRydWUpO1xuICAgIGEuZmlyc3RFbGVtZW50Q2hpbGQuc2V0QXR0cmlidXRlKFwiZGF0YS1icmlja251bWJlclwiLCBpbmRleCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGEpO1xuICAgIGlmKChpbmRleCsxKSAlIGNvbHMgPT09IDApIHtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgIH1cblxuICB9KTtcblxuICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBpbWcgPSBldmVudC50YXJnZXQubm9kZU5hbWUgPSBcIklNR1wiID8gZXZlbnQudGFyZ2V0IDogZXZlbnQudGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkO1xuICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGltZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJyaWNrbnVtYmVyXCIpKTtcbiAgICB0dXJuQnJpY2sodGlsZXNbaW5kZXhdLGluZGV4LCBpbWcpO1xuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcblxuZnVuY3Rpb24gdHVybkJyaWNrKHRpbGUsIGluZGV4LCBpbWcpIHtcblxuICBpbWcuc3JjID1cImltYWdlL1wiK3RpbGUrXCIucG5nXCI7XG4gIHZhciBzZWxmID0gaW1nO1xuICBhbW91bnRPZlRyaWVzICs9IDE7XG4gIHNjb3JlTm9kZS50ZXh0Q29udGVudCA9IGFtb3VudE9mVHJpZXM7XG5cbiAgaWYgKHR1cm4xID09PSBcIlwiKSB7XG4gICAgdHVybjEgPSBzZWxmO1xuICB9IGVsc2UgaWYoc2VsZiAhPT0gdHVybjEpe1xuICAgIGlmIChzZWxmLnNyYyA9PT0gdHVybjEuc3JjKSB7XG4gICAgICB0dXJuMSA9IFwiXCI7XG4gICAgICBwYWlycyArPSAxO1xuICAgICAgaWYocGFpcnMgPT09IChjb2xzKnJvd3MpLzIpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImZpbmlzaGVkIHRoZSBnYW1lIVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB0dXJuMS5zcmMgPVwiaW1hZ2UvMC5wbmdcIjtcbiAgICAgICAgc2VsZi5zcmMgPVwiaW1hZ2UvMC5wbmdcIjtcbiAgICAgICAgdHVybjEgPSBcIlwiO1xuICAgICAgfSwgMTAwMCk7XG5cbiAgICB9XG4gIH1cbn1cblxuXG59O1xuXG5cbmZ1bmN0aW9uIGdldFBpY0FycmF5KHJvd3MsIGNvbHMpIHtcblxuICB2YXIgYXJyID0gW107XG4gIHZhciBpO1xuICBmb3IgKGkgPSAxOyBpIDw9IChyb3dzKmNvbHMpLzI7IGkrKykge1xuICAgIGFyci5wdXNoKGkpO1xuICAgIGFyci5wdXNoKGkpO1xuICB9XG5cbiAgZm9yKHZhciBqID0gYXJyLmxlbmd0aCAtIDE7IGogPiAwOyBqLS0pe1xuICAgIHZhciBoID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGorMSkpO1xuICAgIHZhciB0ZW1wID0gYXJyW2pdO1xuICAgIGFycltqXSA9IGFycltoXTtcbiAgICBhcnJbaF0gPSB0ZW1wO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG4iLCJ2YXIgTWVtb3J5ID0gcmVxdWlyZShcIi4vTWVtb3J5XCIpO1xyXG5uZXcgTWVtb3J5KDQsIDQpO1xyXG4iXX0=
