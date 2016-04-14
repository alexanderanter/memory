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
