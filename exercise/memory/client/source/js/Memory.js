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
