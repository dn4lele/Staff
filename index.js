const rooms = [226, 224, 115, 112];

document.addEventListener("DOMContentLoaded", () => {
  const roomList = document.getElementById("room-list");
  rooms.forEach((room) => {
    const option = document.createElement("option");
    option.appendChild(document.createTextNode(room));
    roomList.appendChild(option);
  });
});
