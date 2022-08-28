<script>
  import { parkingList } from "@stores/app";
  import { Card, CardHeader } from "@components/Card";
</script>

<div class="wrapper">
  {#await $parkingList}
    Loading...
  {:then}
    <div>
      <Card>
        <CardHeader title="Место 1" />
        Место №1
      </Card>
    </div>
    <div style="width: 100%; margin-top: 1rem;">
      <Card>
        Место №2
      </Card>
    </div>
  {:catch error}
    Error {error}
  {/await}
</div>

<style>
  .wrapper {
      width: 100%;
      margin-top: 1rem;
  }
</style>