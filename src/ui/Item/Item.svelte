<script>
    export let transparent = false;
    export let onClick = undefined;
</script>

<div
  class="item"
  class:item--only-left={!$$slots.right}
  class:item--transparent-background={transparent}
  class:item--with-hover={onClick}
  on:click={onClick}
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
        transition: background .1s;
    }

    .item--only-left {
        justify-content: flex-start;
    }

    .item--transparent-background {
        background: transparent;
    }

    .item--with-hover:hover {
        background: var(--color-white-10);
        cursor: pointer;
    }
</style>