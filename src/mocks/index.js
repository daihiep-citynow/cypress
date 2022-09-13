export const roomStatusList = [
  {
    status: "VACANT",
    color: "#fbfaf5",
  },
  {
    status: "NOT_YET_CHECKIN",
    color: "#89c3eb",
  },
  {
    status: "STAYING",
    color: "#f8b500",
  },
  {
    status: "ALREADY_OUT",
    color: "#b79a5b",
  },
];

export const arrStatus = [
  "VACANT",
  "NOT_YET_CHECKIN",
  "STAYING",
  "ALREADY_OUT",
];

export const arrRoomType = ["AA", "BB", "CC", "DD"];

export const arrPerson = [
  "JS",
  "Person Nameeeeeeeeeeeeeeeeeeeeee",
  "Name",
  "Cat",
  "Dog",
  "Cam",
];

export const roomData = [];

for (let i = 0; i < 140 * 3; i += 1) {
  roomData.push({
    id: i + 1,
    status: arrStatus[Math.floor(Math.random() * 4)],
    roomNo: `${Math.floor(Math.random() * 4) * 100 + i}`.padStart(4, "0"),
    personName: arrPerson[Math.floor(Math.random() * 6)],
    roomType: arrRoomType[Math.floor(Math.random() * 4)],
    night: Math.floor(Math.random() * 10) + 1,
  });
}
