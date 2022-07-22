<script>
    import { navigate } from "svelte-navigator";

    import { authAPI } from "@api";
    import { ROUTES } from "@settings";
    import { userToken } from "@stores/user";
    import { checkAuth } from "@utils";

    import { Form, FormDivider } from "@ui/Form";
    import { Input, InputPassword } from "@ui/Input";
    import { IconButton } from "@ui/Button";
    import { Card } from "@components/Card";

    let waitingSignInFetch = false;
    let signInError;

    checkAuth($userToken);

    async function handleSignInSubmit(event) {
        waitingSignInFetch = true;
        signInError = undefined;
        try {
            const signInFormData = event.detail;
            const signInResponseData = await authAPI.signIn(signInFormData);

            $userToken = signInResponseData.idToken || undefined;
            navigate(ROUTES.home);
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