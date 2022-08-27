<script>
  import { beforeUpdate } from "svelte";
  import { userIsLoggedIn } from "@stores/auth";
  import { checkAuth } from "@utils";

  import { Card } from "@components/Card";

  beforeUpdate(() => {
    checkAuth($userIsLoggedIn);
  });
</script>

<svelte:head>
  <title>Parking / OpenMedia Parking</title>
</svelte:head>

<Card>
  Фильтры
</Card>
<div style="width: 100%; margin-top: 1rem;">
  <Card>
    Место №1
  </Card>
</div>
<div style="width: 100%; margin-top: 1rem;">
  <Card>
    Место №2
  </Card>
</div>