<script>
    import { Card } from "@components/Card";
    import { Form, FormDivider } from "@ui/Form";
    import { Input, InputPassword } from "@ui/Input";
    import { Button } from "@ui/Button";
    import { authAPI } from "api";

    let waitingSignInFetch = false;

    async function handleSignInSubmit(event) {
        waitingSignInFetch = true;
        try {
            const data = event.detail;
            const response = await authAPI.signIn(data);
            const resultSignInData = await response.json();
            const resultWithError = !response.ok || resultSignInData.error;

            if ( resultWithError ) {
                throw new Error('SignIn Error.');
            }

            console.log('result', response);
            console.log('result json', resultSignInData);
        } catch (error) {
            console.error(error);
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
        <Button slot="footer" value="Войти" disabled={waitingSignInFetch} />
    </Form>
</Card>