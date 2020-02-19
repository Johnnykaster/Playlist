let playList = JSON.parse(localStorage.getItem("playArray"));
if (playList === null) {
    playList = [];
} else {
    console.log(playList)
}
console.log(playList)

function displayList() {
    $(".playList").html("");
  playList.forEach(item => {
      $(".playList").append("<li>" + item + "</li>")
      console.log(item);
})
};

displayList();

var input = document.getElementById("addOn");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    playList.push($("#addOn").val());
    displayList();
    localStorage.setItem("playArray", JSON.stringify(playList))
    console.log(playList)
  }
});
