<script>
    import Input from "./Input.svelte";

    export let name;
    export let type = "text";
    export let placeholder = "";
    export let disabled = false;
</script>

<div class="wrapper">
    <div class="input">
        <Input
            {name}
            {type}
            {placeholder}
            {disabled}
            notShowOutline
        />
    </div>
    <div class="icon">
        <slot />
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        position: relative;
        width: 100%;
        border-radius: 6px;
    }

    .wrapper:focus-within {
        outline: var(--outline);
    }

    .input {
        width: calc(100% - 48px);
    }

    .icon {
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);
    }
</style>