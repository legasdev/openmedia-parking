import { derived } from "svelte/store";
import { onValue, ref } from "firebase/database";

import { FIREBASE_DB } from "@settings";
import { fbDatabase } from "@stores/firebase";
import filters from "./filters";
import parkingPlaces from "./parkingPlaces";

async function fetchParkingData($fbDatabase) {
  const parkingRef = ref($fbDatabase, `${FIREBASE_DB.parking}/2022/08/28/`);

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
  console.log("$parkingPlaces createParkingList", await $parkingPlaces);
  console.log("$filters createParkingList", $filters);

  const data = await fetchParkingData($fbDatabase);

  console.log("data", data);

  return [];
}

const parkingList = derived(
  [fbDatabase, filters, parkingPlaces],
  createParkingList,
  []
);

export default parkingList;
