<script>

  import SelectWrapper from "./Select.Wrapper.svelte";

  export let name;
  export let value = Date.now();
  export let disabled = false;
</script>

<SelectWrapper>
  <input
    class="input"
    type="date"
    {name}
    {disabled}
    bind:value
  />
</SelectWrapper>

<style>
  .input {
      width: 100%;
      border: transparent;
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.5rem;
      letter-spacing: 0;
      text-align: left;
      outline: none;
      color: var(--color-white-40);
  }
</style>