<script>
    export let type = "text";
    export let placeholder = "";
</script>

<input {type} {placeholder} />

<style>
    input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid transparent;
        background: transparent;
    }
</style>