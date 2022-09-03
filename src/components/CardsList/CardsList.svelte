<script>
  import { parkingList } from "@stores/app";
  import { Card, CardParkingHeader, CardContent, CardFooter } from "@components/Card";
  import { ParkingInfo } from "@components/ParkingInfo";
</script>

<div class="wrapper">
  {#each $parkingList as { level, firstHalf, afternoon, parkingId } (parkingId)}
    <div style="width: 100%; margin-top: 1rem;">
      <Card>
        <CardParkingHeader number={parkingId} />
        <CardContent>
          <ParkingInfo {firstHalf} {afternoon} {parkingId} places={$parkingList} />
        </CardContent>
        <CardFooter {level} />
      </Card>
    </div>
  {/each}
</div>

<style>
  .wrapper {
      width: 100%;
      margin: 1rem 0;
  }
</style>