let playList = JSON.parse(localStorage.getItem("playArray"));
if (playList === null) {
    playList = [];
} else {
    console.log(playList)
}
console.log(playList)

function displayList() {
    $(".list").html("");
  playList.forEach(item => {
      $(".list").append("<p>" + item + "</p>")
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
    document.getElementById('addOn').value = '';
  }
});

$(".clear").click(function(){
    $("#areYouSure").show();
});

$("#finalClear").click(function() {
    localStorage.clear("playArray");
    playList = [];
    displayList();
    $("#areYouSure").hide();
});