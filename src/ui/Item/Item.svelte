<script>
    export let transparent = false;
</script>

<div
  class="item"
  class:item--only-left={!$$slots.right}
  class:item--transparent-background={transparent}
  on:click
>
    <slot name="left"></slot>
    <slot name="right"></slot>
</div>

<style>
    .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0.5rem;
        background: var(--color-white);
        border-radius: 0.375rem;
    }

    .item--only-left {
        justify-content: flex-start;
    }

    .item--transparent-background {
        background: transparent;
    }
</style>