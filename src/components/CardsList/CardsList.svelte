<script>
  import { parkingList } from "@stores/app";
  import { Card, CardParkingHeader, CardContent, CardFooter } from "@components/Card";
  import ParkingInfo from "../ParkingInfo/ParkingInfo.svelte";
</script>

<div class="wrapper">
  {#await $parkingList}
    Loading...
  {:then places}
    {#each places as { level, firstHalf, afternoon, parkingId } (parkingId)}
      <div style="width: 100%; margin-top: 1rem;">
        <Card>
          <CardParkingHeader number={parkingId} />
          <CardContent>
            <ParkingInfo {firstHalf} {afternoon} />
          </CardContent>
          <CardFooter {level} />
        </Card>
      </div>
    {/each}
  {:catch error}
    Error {error}
  {/await}
</div>

<style>
  .wrapper {
      width: 100%;
      margin: 1rem 0;
  }
</style>