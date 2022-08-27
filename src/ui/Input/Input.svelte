<script>
    export let name;
    export let type = "text";
    export let placeholder = "";
    export let disabled = false;
    export let notShowOutline = false;
</script>

<input
   class="input"
   class:input--without-outline={notShowOutline}
   {name}
   {type}
   {placeholder}
   {disabled}
/>

<style>
    .input {
        width: 100%;
        padding: 0.75rem;
        border-radius: 0.375em;
        border: 1px solid transparent;
        background: transparent;
        font-style: normal;
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 1.5rem;
        color: var(--color-dark-10);
    }

    .input::placeholder {
        color: var(--color-white-40);
    }

    .input:disabled,
    .input:disabled::placeholder {
        color: var(--color-white-30);
    }

    .input:focus {
        outline: var(--outline);
    }

    .input--without-outline:focus {
        outline: none;
    }
</style>