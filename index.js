let playList = [];

function displayList() {
    $(".playList").html("");
  playList.forEach(function(show) {
    $(".playList").append("<li>" + show + "</li>")
  })
};

var input = document.getElementById("addOn");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    playList.push($("#addOn").val());
    displayList();
    console.log(playList)
  }
});
