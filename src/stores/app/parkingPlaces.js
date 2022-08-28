import { derived } from "svelte/store";
import { ref, onValue } from "firebase/database";
import { FIREBASE_DB } from "@settings";

import { fbDatabase } from "@stores/firebase";

async function createParkingPlaces($fbDatabase) {
  return new Promise((resolve) => {
    const parkingPlacesRef = ref($fbDatabase, FIREBASE_DB.parkingPlaces);
    onValue(
      parkingPlacesRef,
      (snapshot) => {
        resolve(snapshot.val());
      },
      () => {
        resolve({});
      }
    );
  });
}

const parkingPlaces = derived(fbDatabase, createParkingPlaces);

export default parkingPlaces;
