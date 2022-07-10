<script>
    export let value = null;
    export let disabled = false;
</script>

<button class="button" {disabled}>
    {#if value}
        <span class="text">{value}</span>
    {/if}
</button>

<style>
    .button {
        width: 100%;
        padding: 0.75rem;
        background: var(--color-dark-100);
        border: 1px solid transparent;
        border-radius: 0.375rem;
        cursor: pointer;
        transition: background .1s, border .1s;
    }

    .button:hover {
        background: var(--color-dark-200);
    }

    .button:active {
        background: var(--color-dark-300);
    }

    .button:disabled {
        background: var(--color-white-300);
    }

    .button:focus {
        outline: var(--outline);
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