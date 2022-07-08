var cells = document.querySelectorAll(".cell");
var player = true;
var count = 0;
var btn = document.querySelector(".reset");
btn.addEventListener("click",resetgame);
function fill()
{
  cells.forEach(cell=>{
    cell.addEventListener("click",execute,{once:true});
  });
}
function execute()
{
  count++;

  this.innerText = player ? "X" : "O";
  var t = !player ? "X" : "O";
  $("h1").text("Player " + t + " Turn");
  player = !player;
  var v1 = cells[0].innerText;
  var v2 = cells[1].innerText;
  var v3 = cells[2].innerText;
  var v4 = cells[3].innerText;
  var v5 = cells[4].innerText;
  var v6 = cells[5].innerText;
  var v7 = cells[6].innerText;
  var v8 = cells[7].innerText;
  var v9 = cells[8].innerText;
  if (
    (v1 != "" && v1 == v2 && v1 == v3) ||
    (v4 != "" && v4 == v5 && v4 == v6) ||
    (v7 != "" && v7 == v8 && v7 == v9) ||
    (v1 != "" && v1 == v4 && v1 == v7) ||
    (v2 != "" && v2 == v5 && v2 == v8) ||
    (v3 != "" && v3 == v6 && v3 == v9) ||
    (v1 != "" && v1 == v5 && v1 == v9) ||
    (v3 != "" && v3 == v5 && v3 == v7)
  )
  {
    var p = !player ? "X" : "O";
    $("h2").text("Player " + p + " Won!");
    $(".pop").css("display","flex");
    $("h1").text("Game Over");
  }
  if (count == 9)
  {
    $("h2").text("Tie!");
    $(".pop").css("display","flex");
    $("h1").text("Game Over");
  }
}
function resetgame()
{
  $("h1").text("Player X Turn");
  count = 0;
  player = true;
  $(".pop").css("display","none");
  cells.forEach(cell=>{
    cell.innerText="";
  });
  fill();
}
fill();
