<script>
  import { DateInput } from "./../date";

  import { formatDateToInputDate } from "@utils";
  import SelectWrapper from "./Select.Wrapper.svelte";

  export let name;
  export let value = formatDateToInputDate(Date.now());
  export let disabled = false;
</script>

<SelectWrapper>
<!--  <DateInput class="input" {name} bind:value format="yyyy-MM-dd" {disabled} />-->
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