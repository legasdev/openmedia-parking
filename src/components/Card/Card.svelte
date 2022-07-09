<svelte:element
    this={$$slots.header ? "section" : "div"}
    class="main"
>
    <slot name="header" />
    <slot />
</svelte:element>

<style>
    .main {
        width: 100%;
        padding: 1.5rem 1rem 1.5rem;
        border-radius: .5rem;
        background: var(--color-white);
    }
</style>