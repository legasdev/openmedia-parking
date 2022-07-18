<script>
    import { userToken } from "@stores/user";
    import { checkAuth } from "@utils";

    checkAuth($userToken);
</script>

<svelte:head>
    <title>Parking / OpenMedia Parking</title>
</svelte:head>

MainPage