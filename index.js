let playList = []

function displayList() {
  playList.forEach(function(show) {
    $(".playList").append("<li>" + show + "</li>")
  })
};

var input = document.getElementById("addOn");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    playList.push($("#addOn").val());
    $(".playList").append("<li>" + playList(playList.length()) + "<li>");
  }
});
