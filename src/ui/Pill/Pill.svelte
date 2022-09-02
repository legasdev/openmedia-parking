<script>
  import { PARKING_STATUS } from "@src/constants";

  export let value = "";
  export let status = PARKING_STATUS.free;
</script>

<div class="wrapper" class:wrapper--red={status === PARKING_STATUS.busy}>
  {value}
</div>

<style>
  .wrapper {
      min-height: 1.5rem;
      padding: 2px 8px;
      border-radius: 64px;
      background: var(--color-green-10);
      color: var(--color-white);
  }

  .wrapper--red {
      background: var(--color-red-60);
  }
</style>