import { derived } from "svelte/store";
import { getDatabase, onValue, ref } from "firebase/database";

import { formatDateToInputDate } from "@utils";
import { FIREBASE_DB } from "@settings";

import filters from "./filters";

let removeRefListener = () => {};

function updateParkingListFromDatabase($filters, set) {
  const searchDate = formatDateToInputDate($filters.date).split("-");
  const year = searchDate[0];
  const month = searchDate[1];
  const day = searchDate[2];
  const parkingRef = ref(
    getDatabase(),
    `${FIREBASE_DB.parking}/${year}/${month}/${day}/`
  );

  removeRefListener();

  removeRefListener = onValue(
    parkingRef,
    (snapshot) => {
      const pieces = snapshot.ref._path.pieces_;
      const [, snapshotYear, snapshotMonth, snapshotDay] = pieces;

      if (
        +snapshotYear !== +year ||
        +snapshotMonth !== +month ||
        +snapshotDay !== +day
      ) {
        return;
      }

      set(snapshot.val());
    },
    () => {
      set([]);
    }
  );
}

const parkingListFromDatabase = derived(
  filters,
  updateParkingListFromDatabase,
  []
);

export default parkingListFromDatabase;
