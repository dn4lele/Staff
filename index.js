const rooms = [];

const getRooms = () => {
  //   fetch("/rooms")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       data.forEach((room) => {
  //         rooms.push(room);
  //       });
  //     });

  rooms.push("General");
  rooms.push("kitune");
};

const loadRooms = () => {
  const roomList = document.getElementById("room-list");
  rooms.forEach((room) => {
    const option = document.createElement("option");
    option.appendChild(document.createTextNode(room));
    roomList.appendChild(option);
  });
};

const loadSupply = () => {
  const room = document.getElementById("room-list").value;
  //   fetch(`/supplies/${room}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const supplyList = document.getElementById("supply-list");
  //       supplyList.innerHTML = data;
  //     });
};

const saveSupply = () => {
  const room = document.getElementById("room-list").value;
  const supply = document.getElementById("supply").value;
  //   fetch(`/supplies/${room}`, {
  //     method: "PATCH",
  //     body: JSON.stringify({ supply }),
  //   }).then(() => {
  //     loadSupply();
  //   });
};

document.addEventListener("DOMContentLoaded", () => {
  getRooms();
  loadRooms();
  document.getElementById("room-list").addEventListener("change", loadSupply);
  document.getElementById("add-supply").addEventListener("click", saveSupply);
});
