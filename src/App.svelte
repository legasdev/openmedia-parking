<script>
	import { beforeUpdate, onMount } from "svelte";
	import { navigate, Router, Route } from "svelte-navigator";
	import { SETTINGS, ROUTES } from "@settings";
	import { authToken } from "@stores/auth";
	import { fbAuth } from "@stores/firebase";

	import SignIn from "@routes/SignIn.svelte";
	import Main from "@routes/Main.svelte";

	import Header from "@components/Header.svelte";

	onMount(() => {
		console.log($fbAuth);
	});

	beforeUpdate(async () => {
		if ( !$authToken ) {
			navigate(ROUTES.signIn);
		}
	});
</script>

<Router primary={false} basepath={SETTINGS.baseURL}>
	<main class="main">
		<Header />
		<Route path={ROUTES.home}>
			<Main />
		</Route>
		<Route path={ROUTES.signIn}>
			<SignIn />
		</Route>
	</main>
</Router>

<style>
	:global(:root) {
		--color-white: #FFFFFF;
		--color-white-10: #F7F7F7;
		--color-white-20: #E8E8E8;
		--color-white-30: #C6C6C6;
		--color-white-40: #8D8D8D;
		--color-dark-10: #000000;
		--color-dark-20: #272727;
		--color-dark-30: #393939;
		--color-dark-40: #E0E0E0;
		--color-purple-60: #3A35D1;
		--color-purple-50: #4F49F3;
		--color-purple-40: #7A75FF;
		--color-red-70: #C20000;
		--color-red-60: #EB0000;
		--color-red-50: #FF2E2E;
		--color-green: #37CC71;
		--color-yellow: #FFA514;

		--outline: 2px solid var(--color-purple-40);
	}

	:global(body) {
		background: var(--color-white-10);
	}

	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 424px;
		margin: 0 auto;
	}
</style>