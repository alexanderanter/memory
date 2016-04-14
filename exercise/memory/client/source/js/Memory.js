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
