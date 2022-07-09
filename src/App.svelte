<script>
	import { navigate, Router, Route } from "svelte-navigator";
	import {SETTINGS} from "@src/settings";

	import SignIn from "@routes/SignIn.svelte";
	import Header from "@components/Header.svelte";

	let isAuth = false;

	if ( !isAuth ) {
		navigate("signin");
	}
</script>

<Router primary={false} basepath={SETTINGS.baseURL}>
	<main class="main">
		<Header />
		<Route path="/">
			MainPage
		</Route>
		<Route path="/signin">
			<SignIn />
		</Route>
	</main>
</Router>

<style>
	:global(:root) {
		--color-white: #FFFFFF;
		--color-white-100: #F7F7F7;
		--color-white-200: #E8E8E8;
	}

	:global(body) {
		background: var(--color-white-100);
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