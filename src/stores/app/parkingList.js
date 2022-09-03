import { derived } from "svelte/store";

import parkingPlaces from "./parkingPlaces";
import parkingListFromDatabase from "./parkingListFromDatabase";

async function fetchParkingData(searchDate) {
  return new Promise((resolve) => {});
}

function createParkingList([$parkingPlaces, $parkingListFromDatabase]) {
  return Object.values($parkingPlaces).map(({ level, number }) => {
    const placeInDatabase = $parkingListFromDatabase.find(
      ({ parkingId }) => +parkingId === +number
    );

    if (!placeInDatabase) {
      return {
        level,
        firstHalf: "",
        afternoon: "",
        parkingId: +number,
      };
    }

    return {
      level,
      ...placeInDatabase,
    };
  });
}

const parkingList = derived(
  [parkingPlaces, parkingListFromDatabase],
  createParkingList,
  []
);

export default parkingList;
