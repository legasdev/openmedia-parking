import { writable } from "svelte/store";
import { ref, onValue, getDatabase } from "firebase/database";

import { FIREBASE_DB } from "@settings";

function createParkingPlaces() {
  const { set, update, subscribe } = writable({});

  const parkingPlacesRef = ref(getDatabase(), FIREBASE_DB.parkingPlaces);
  onValue(
    parkingPlacesRef,
    (snapshot) => {
      set(snapshot.val());
    },
    () => {
      set({});
    }
  );

  return {
    set,
    update,
    subscribe,
  };
}

const parkingPlaces = createParkingPlaces();

export default parkingPlaces;
