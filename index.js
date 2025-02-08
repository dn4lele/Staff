const rooms = [];

const loadRooms = () => {
  const roomList = document.getElementById("room-list");
  rooms.forEach((room) => {
    const option = document.createElement("option");
    option.appendChild(document.createTextNode(room));
    roomList.appendChild(option);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  rooms.push("General"); // call the server to get the rooms

  loadRooms();
});
