<script>
    import {STYLES} from "./constants";

    export let disabled = false;
    export let theme = STYLES.secondary;
</script>

<button
    class="button"
    class:secondary={theme === STYLES.secondary}
    {disabled}
>
    <span class="wrapper">
        <slot />
    </span>
</button>

<style>
    .button {
        width: 100%;
        padding: 0.75rem;
        background: var(--color-red-60);
        border: 1px solid transparent;
        border-radius: 0.375rem;
        cursor: pointer;
        transition: background .1s, border .1s;
    }

    .button:focus {
        outline: var(--outline);
    }

    /* themes: primary */

    .button:hover {
        background: var(--color-red-50);
    }

    .button:active {
        background: var(--color-red-70);
    }

    .button:disabled {
        background: var(--color-white-30);
    }

    /* themes: secondary */

    .secondary {
        background: var(--color-dark-10);
    }

    .button.secondary:hover {
        background: var(--color-dark-20);
    }

    .button.secondary:active {
        background: var(--color-dark-30);
    }

    .button.secondary:disabled {
        background: var(--color-white-30);
    }

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>