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

  export let firstHalf = { uid: "", displayName: "" };
  export let afternoon = { uid: "", displayName: "" };
  export let places = [];
  export let parkingId = "";

  function handleClick(period, userId) {
    const { uid, displayName } = $userInformation;

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
        [period]: userId === uid ? {
          uid: "",
          displayName: ""
        } : {
          uid,
          displayName,
        },
      }
    });

    set(parkingPlaceRef, updatedPlaces);
  }

  let firstHalfStatus;
  let firstHalfStatusName;
  let afternoonStatus;
  let afternoonStatusName;

  $: firstHalfStatus = firstHalf.uid ? PARKING_STATUS.busy : PARKING_STATUS.free;
  $: firstHalfStatusName = firstHalf.uid ? firstHalf.displayName : PARKING_STATUS_NAME.free;
  $: afternoonStatus = afternoon.uid ? PARKING_STATUS.busy : PARKING_STATUS.free;
  $: afternoonStatusName = afternoon.uid ? afternoon.displayName : PARKING_STATUS_NAME.free;
</script>

<Item onClick={() => handleClick(PARKING_PERIOD.firstHalf, firstHalf.uid)}>
  <div class="time-text" slot="left">8:00 - 14:00</div>
  <Pill slot="right" value={firstHalfStatusName} status={firstHalfStatus} />
</Item>
<Divider/>
<Item onClick={() => handleClick(PARKING_PERIOD.afternoon, afternoon.uid)}>
  <div class="time-text" slot="left">14:00 - 20:00</div>
  <Pill slot="right" value={afternoonStatusName} status={afternoonStatus} />
</Item>

<style>
  .time-text {
      flex: 1 0 auto;
  }
</style>