<script>
	import {beforeUpdate} from "svelte";
	import { navigate, Router, Route } from "svelte-navigator";
	import {SETTINGS} from "@src/settings";

	import SignIn from "@routes/SignIn.svelte";
	import Main from "@routes/Main.svelte";
	import Header from "@components/Header.svelte";

	let isAuth = false;

	beforeUpdate(() => {
		if ( !isAuth ) {
			navigate("signin");
		}
	});
</script>

<Router primary={false} basepath={SETTINGS.baseURL}>
	<main class="main">
		<Header />
		<Route path="/">
			<Main />
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
		--color-white-300: #C6C6C6;
		--color-white-400: #8D8D8D;
		--color-dark-100: #000000;
		--color-dark-200: #272727;
		--color-dark-300: #393939;
		--color-purple-100: #7A75FF;

		--outline: 2px solid var(--color-purple-100);
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