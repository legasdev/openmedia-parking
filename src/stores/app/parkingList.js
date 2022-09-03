import { derived } from "svelte/store";

import parkingPlaces from "./parkingPlaces";
import parkingListFromDatabase from "./parkingListFromDatabase";

const defaultUserInfo = {
  uid: "",
  displayName: "",
};

function createParkingList([$parkingPlaces, $parkingListFromDatabase]) {
  return Object.values($parkingPlaces).map(({ level, number }) => {
    const placeInDatabase = $parkingListFromDatabase?.find(
      ({ parkingId }) => +parkingId === +number
    );

    if (!placeInDatabase) {
      return {
        level,
        firstHalf: defaultUserInfo,
        afternoon: defaultUserInfo,
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
