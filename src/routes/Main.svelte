<script>
  import { beforeUpdate } from "svelte";
  import { userIsLoggedIn } from "@stores/auth";
  import { parkingFilters } from "@stores/app";
  import { checkAuth } from "@utils";

  import { SelectDate } from "@ui/Select";
  import { Card } from "@components/Card";
  import { CardsList } from "@components/CardsList";

  beforeUpdate(() => {
    checkAuth($userIsLoggedIn);
  });
</script>

<svelte:head>
  <title>Parking / OpenMedia Parking</title>
</svelte:head>

<Card>
  <SelectDate name="date" bind:value={$parkingFilters.date} />
</Card>
<CardsList />