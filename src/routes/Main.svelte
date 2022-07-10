<script>
    import {navigate} from "svelte-navigator";

    let isAuth = false;

    if ( !isAuth ) {
        navigate("signin");
    }
</script>

<svelte:head>
    <title>Parking / OpenMedia Parking</title>
</svelte:head>
MainPage