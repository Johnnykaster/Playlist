let playList = []
localStorage.setItem('items', JSON.stringify(playList))
const data = JSON.parse(localStorage.getItem('items'))

function displayList() {
    $(".playList").html("");
  data.forEach(item => {
      $(".playList").append("<li>" + item + "</li>")
})
};

var input = document.getElementById("addOn");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    playList.push($("#addOn").val());
    localStorage.setItem('items', JSON.stringify(playList))
    displayList();
    console.log(playList)
  }
});
