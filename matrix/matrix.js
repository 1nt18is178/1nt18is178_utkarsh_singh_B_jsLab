var m = prompt("Enter row size");
console.log(m);
var n = prompt("Enter column size");

for (let i = 0; i < n * m; i++) {
  var div = document.createElement("div");
  div.id = i + 1;
  div.className = "grid-item";
  var ip = prompt(`Enter input for element  ${i + 1}`);
  var textnode = document.createTextNode(i + 1);
  div.appendChild(textnode);
  document.getElementById("gc").appendChild(div);
}
