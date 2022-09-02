<script>
  import { PARKING_LEVEL } from "@src/constants";

  export let level = PARKING_LEVEL.low;

  $: levelText = level === PARKING_LEVEL.low ? "Нижний уровень" : "Верхний уровень";
</script>

<footer class="wrapper">
  <span class="text">{levelText}</span>
</footer>

<style>
  .wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 1.375rem;
  }

  .text {
      font-style: normal;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.25rem;
      color: var(--color-white-40);
  }
</style>