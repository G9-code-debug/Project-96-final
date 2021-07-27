Roomnames = [];
var roomname = document.getElementById("input_roomname");
var username = localStorage.getItem("xyz");
function addroom() {
    Roomnames.push(roomname);
    localStorage.setItem("roomname", roomname);
    window.location = "room.html";
    row = "<div class='room_name' id='+Roomnames+' onclick='redirectToRoomName(this.id)'>#" + Roomnames + "</div><hr>"
}