<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function handleSubmit(event) {
        const inputs = Array
            .from(event.target.elements)
            .filter(element => element.nodeName === 'INPUT');

        dispatch('submit', inputs.map(({ name, value }) => ({
            name,
            value,
        })));
    }
</script>

<form class="form" on:submit|preventDefault={handleSubmit}>
    <div class="wrapper">
        <slot />
    </div>
    <footer class="footer">
        <slot name="footer" />
    </footer>
</form>

<style>
    .form {
        width: 100%;
    }

    .wrapper {
        width: 100%;
        background: var(--color-white-10);
        border-radius: 6px;
    }

    .footer {
        width: 100%;
        margin-top: 1rem;
    }
</style>