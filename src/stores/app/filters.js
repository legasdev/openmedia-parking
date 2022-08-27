import { writable } from "svelte/store";

import { formatDateToInputDate } from "@utils";

function createParkingFilters() {
  return writable({
    date: formatDateToInputDate(Date.now()),
  });
}

const parkingFilters = createParkingFilters();

export default parkingFilters;
