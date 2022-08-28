import { derived } from "svelte/store";
import { onValue, ref } from "firebase/database";

import { FIREBASE_DB } from "@settings";
import { fbDatabase } from "@stores/firebase";
import filters from "./filters";
import parkingPlaces from "./parkingPlaces";

async function fetchParkingData($fbDatabase, searchDate) {
  const year = searchDate[0];
  const month = searchDate[1];
  const day = searchDate[2];
  const parkingRef = ref(
    $fbDatabase,
    `${FIREBASE_DB.parking}/${year}/${month}/${day}/`
  );

  return new Promise((resolve) => {
    onValue(
      parkingRef,
      (snapshot) => {
        resolve(snapshot.val());
      },
      () => {
        resolve([]);
      }
    );
  });
}

async function createParkingList([$fbDatabase, $filters, $parkingPlaces]) {
  const searchDate = $filters.date.split("-");
  const listParkingPlaces = await fetchParkingData($fbDatabase, searchDate);
  const parkingPlaces = Object.values(await $parkingPlaces).map(
    ({ level, number }) => {
      const placeInDatabase = listParkingPlaces?.find(
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
    }
  );

  console.log("listParkingPlaces", listParkingPlaces);
  console.log("parkingPlaces", parkingPlaces);

  return parkingPlaces;
}

const parkingList = derived(
  [fbDatabase, filters, parkingPlaces],
  createParkingList,
  []
);

export default parkingList;
