import { writable } from "svelte/store";
import { ref, onValue, getDatabase } from "firebase/database";

import { FIREBASE_DB } from "@settings";

function createParkingPlaces() {
  const { set, update, subscribe } = writable({});
  const db = getDatabase();

  const parkingPlacesRef = ref(db, FIREBASE_DB.parkingPlaces);
  onValue(
    parkingPlacesRef,
    (snapshot) => {
      set(snapshot.val());
    },
    () => {
      set({});
    }
  );

  function updateData() {
    onValue(
      parkingPlacesRef,
      (snapshot) => {
        set(snapshot.val());
      },
      () => {
        set({});
      },
      {
        onlyOnce: true,
      }
    );
  }

  return {
    set,
    update,
    updateData,
    subscribe,
  };
}

const parkingPlaces = createParkingPlaces();

export default parkingPlaces;
