<script>
    import { SIZES, STYLES } from "./constants";

    export let disabled = false;
    export let theme = STYLES.secondary;
    export let size = SIZES.middle;
</script>

<button
    class="button"
    class:secondary={theme === STYLES.secondary}
    class:tertiary={theme === STYLES.tertiary}
    class:flat={theme === STYLES.flat}
    class:ghost-link={theme === STYLES.ghostLink}
    class:ghost={theme === STYLES.ghost}
    class:mini={size === SIZES.mini}
    {disabled}
    on:click
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

    /* sizes: mini */

    .mini {
        padding: 0;
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

    .button.secondary {
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

    /* themes: tertiary */

    /* themes: flat */

    /* themes: ghost-link */

    /* themes: ghost */

    .button.ghost {
        background: transparent;
    }

    .button.ghost:hover {
        background: transparent;
    }

    .button.ghost:active {
        background: transparent;
    }

    .button.ghost:disabled {
        background: transparent;
    }

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>