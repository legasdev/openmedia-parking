<script>
    export let name = " ";
</script>

<div class="avatar">
    <span class="letter">{name[0]}</span>
</div>

<style>
    .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        background: var(--color-white);
        border: 1px solid var(--color-dark-40);
        border-radius: 100vh;
        overflow: hidden;
    }

    .letter {
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.25rem;
        text-align: center;
        color: var(--color-red-60);
    }
</style>