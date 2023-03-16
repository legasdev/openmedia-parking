<script>
  import { beforeUpdate, onMount } from "svelte";
  import { userIsLoggedIn } from "@stores/auth";
  import { parkingFilters, parkingPlaces } from "@stores/app";

  import { checkAuth } from "@utils";

  import { SelectDate } from "@ui/Select";
  import { Card } from "@components/Card";
  import { CardsList } from "@components/CardsList";

  beforeUpdate(() => {
    checkAuth($userIsLoggedIn);
  });

  onMount(() => {
    parkingPlaces.updateData();
  });
</script>

<svelte:head>
  <title>Parking / OpenMedia Parking</title>
</svelte:head>

<Card>
  <SelectDate name="date" bind:value={$parkingFilters.date} />
</Card>
<CardsList />