<script>
  import { ref, set } from "firebase/database";

  import { FIREBASE_DB } from "@settings";
  import { PARKING_STATUS, PARKING_PERIOD, PARKING_STATUS_NAME } from "@src/constants";

  import { userInformation } from "@stores/auth";
  import { parkingFilters } from "@stores/app";
  import { fbDatabase } from "@stores/firebase";

  import { Item } from "@ui/Item";
  import { Divider } from "@ui/Divider";
  import { Pill } from "@ui/Pill";

  export let firstHalf = "";
  export let afternoon = "";
  export let places = [];
  export let parkingId = "";

  function handleClick(period, userId) {
    const { uid } = $userInformation;

    if (!parkingId || !period || (userId !== uid && userId !== "")) {
      return;
    }

    const { date } = $parkingFilters;
    const [year, month, day] = date.split('-');

    const parkingPlaceRef = ref(
      $fbDatabase,
      `${FIREBASE_DB.parking}/${year}/${month}/${day}/`
    );

    const updatedPlaces = places.map(place => {
      if (place.parkingId !== parkingId) {
        return place;
      }

      return {
        ...place,
        [period]: userId === uid ? "" : uid,
      }
    });

    set(parkingPlaceRef, updatedPlaces);
  }

  $: firstHalfStatus = firstHalf ? PARKING_STATUS.busy : PARKING_STATUS.free;
  $: firstHalfStatusName = firstHalf ? PARKING_STATUS_NAME.busy : PARKING_STATUS_NAME.free;
  $: afternoonStatus = afternoon ? PARKING_STATUS.busy : PARKING_STATUS.free;
  $: afternoonStatusName = afternoon ? PARKING_STATUS_NAME.busy : PARKING_STATUS_NAME.free;
</script>

<Item onClick={() => handleClick(PARKING_PERIOD.firstHalf, firstHalf)}>
  <div slot="left">8:00 - 14:00</div>
  <Pill slot="right" value={firstHalfStatusName} status={firstHalfStatus} />
</Item>
<Divider/>
<Item onClick={() => handleClick(PARKING_PERIOD.afternoon, afternoon)}>
  <div slot="left">14:00 - 20:00</div>
  <Pill slot="right" value={afternoonStatusName} status={afternoonStatus} />
</Item>