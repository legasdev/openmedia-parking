<script>
  import { onMount } from "svelte";

  import { fbDatabase } from "@stores/firebase";
  import { parkingPlaces, parkingList } from "@stores/app";
  import { Card } from "@components/Card";

  onMount(async () => {
    console.log('fbDatabase', $fbDatabase);
    // console.log('parkingPlaces', await $parkingPlaces);
    // const starCountRef = ref($fbDatabase, 'parking/2022/08/28/');

    // set(starCountRef, [
    //   {
    //     parkingId: 100,
    //     firstHalf: '',
    //     afternoon: '1231231'
    //   },
    //   {
    //     parkingId: 22,
    //     firstHalf: '1231231',
    //     afternoon: ''
    //   },
    // ]);

    // onValue(starCountRef, (snapshot) => {
    //   const data = snapshot.val();
    //   console.log('data', data)
    // });
  });
</script>

<div class="wrapper">
  {#await $parkingList}
    Loading...
  {:then}
    <div>
      <Card>
        Место №1
      </Card>
    </div>
    <div style="width: 100%; margin-top: 1rem;">
      <Card>
        Место №2
      </Card>
    </div>
  {:catch error}
    Error
  {/await}
</div>

<style>
  .wrapper {
      width: 100%;
      margin-top: 1rem;
  }
</style>