<script>
  export let number;
</script>

<header class="header">
  <span class="text">Парковочное место</span>
  {#if number}
    <span class="text text--gray">#{number}</span>
  {/if}
</header>

<style>
  .header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      width: 100%;
  }

  .text {
      font-style: normal;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.5rem;
      color: var(--color-dark-10);
  }

  .text--gray {
    color: var(--color-white-50);
  }
</style>