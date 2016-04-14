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
