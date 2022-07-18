<script>
    export let value = null;
    export let disabled = false;

    const hasIcon = $$slots.default || false;
</script>

<button class="button" {disabled}>
    <span class="wrapper">
        {#if hasIcon}
            <span class="icon">
                <slot></slot>
            </span>
        {/if}
        {#if value}
            <span class="text">{value}</span>
        {/if}
    </span>
</button>

<style>
    .button {
        width: 100%;
        padding: 0.75rem;
        background: var(--color-dark-10);
        border: 1px solid transparent;
        border-radius: 0.375rem;
        cursor: pointer;
        transition: background .1s, border .1s;
    }

    .button:hover {
        background: var(--color-dark-20);
    }

    .button:active {
        background: var(--color-dark-30);
    }

    .button:disabled {
        background: var(--color-white-30);
    }

    .button:focus {
        outline: var(--outline);
    }

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

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