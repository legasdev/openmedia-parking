<script>
  import { onMount } from "svelte";
  import { ref, onValue } from "firebase/database";

  import { fbDatabase } from "@stores/firebase";
  import { Card } from "@components/Card";

  onMount(() => {
    console.log('fbDatabase', $fbDatabase);
    const starCountRef = ref($fbDatabase, 'users/');

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log('data', data);
    });
  });
</script>

<div class="wrapper">
  <div>
    <Card>
      Место №1
    </Card>
  </div>
  <div style="width: 100%; margin-top: 1rem;">
    <Card>
      Место №2
    </Card>
  </div>
</div>

<style>
  .wrapper {
      width: 100%;
      margin-top: 1rem;
  }
</style>