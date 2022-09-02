<script>
  import { PARKING_STATUS } from "@src/constants";
  import { Item } from "@ui/Item";
  import { Divider } from "@ui/Divider";
  import { Pill } from "@ui/Pill";

  export let firstHalf = "";
  export let afternoon = "";
</script>

<Item on:click={() => console.log('EVENT')}>
  <div slot="left">8:00 - 14:00</div>
  <Pill slot="right" value={firstHalf ? "Занято" : "Свободно"} status={firstHalf ? PARKING_STATUS.busy : PARKING_STATUS.free} />
</Item>
<Divider/>
<Item>
  <div slot="left">14:00 - 20:00</div>
  <Pill slot="right" value={afternoon ? "Занято" : "Свободно"} status={afternoon ? PARKING_STATUS.busy : PARKING_STATUS.free} />
</Item>