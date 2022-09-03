import { derived } from "svelte/store";
import { getDatabase, onValue, ref } from "firebase/database";

import { formatDateToInputDate } from "@utils";
import { FIREBASE_DB } from "@settings";

import filters from "./filters";

function createParkingListFromDatabase($filters, set) {
  const searchDate = formatDateToInputDate($filters.date).split("-");
  const year = searchDate[0];
  const month = searchDate[1];
  const day = searchDate[2];
  const parkingRef = ref(
    getDatabase(),
    `${FIREBASE_DB.parking}/${year}/${month}/${day}/`
  );

  onValue(
    parkingRef,
    (snapshot) => {
      set(snapshot.val());
    },
    () => {
      set([]);
    }
  );
}

const parkingListFromDatabase = derived(
  filters,
  createParkingListFromDatabase,
  []
);

export default parkingListFromDatabase;
