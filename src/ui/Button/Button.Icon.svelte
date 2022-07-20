<script>
    import Button from "./Button.svelte";
    import {STYLES} from "./constants";

    export let value = null;
    export let disabled = false;
    export let theme = STYLES.secondary;

    const hasIcon = $$slots.default || false;
</script>

<Button {disabled} {theme}>
    {#if hasIcon}
        <span class="icon">
            <slot></slot>
        </span>
    {/if}
    {#if value}
        <span class="text">{value}</span>
    {/if}
</Button>

<style>
    .icon {
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.25rem;
    }

    .text {
        color: var(--color-white);
        font-style: normal;
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 1.5rem;
        text-align: center;
    }
</style>