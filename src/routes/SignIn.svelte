<script>
    import { navigate } from "svelte-navigator";

    import { Card } from "@components/Card";
    import { Form, FormDivider } from "@ui/Form";
    import { Input, InputPassword } from "@ui/Input";
    import { IconButton } from "@ui/Button";
    import { authAPI } from "@api";
    import { userToken } from "@stores/user";
    import { checkAuth } from "@utils";

    let waitingSignInFetch = false;
    let signInError;

    checkAuth($userToken);

    async function handleSignInSubmit(event) {
        waitingSignInFetch = true;
        signInError = undefined;
        try {
            const data = event.detail;
            const response = await authAPI.signIn(data);
            const resultSignInData = await response.json();
            const resultWithError = !response.ok || resultSignInData.error;

            if ( resultWithError ) {
                throw new Error('Incorrect login or password.');
            }

            $userToken = resultSignInData.idToken || undefined;
            navigate('/');
        } catch (error) {
            signInError = error.message;
        }
        waitingSignInFetch = false;
    }
</script>

<svelte:head>
    <title>SignIn / OpenMedia Parking</title>
</svelte:head>
<Card>
    <Form on:submit={handleSignInSubmit}>
        <Input type="email" name="email" placeholder="Email" disabled={waitingSignInFetch} />
        <FormDivider />
        <InputPassword name="password" placeholder="Пароль" disabled={waitingSignInFetch} />
        <IconButton slot="footer" value="Войти" disabled={waitingSignInFetch} />
    </Form>
    {#if signInError}
        <span class="error-message">{signInError}</span>
    {/if}
</Card>

<style>
    .error-message {
        display: inline-block;
        margin-top: 1.25rem;
        color: var(--color-red-70);
    }
</style>