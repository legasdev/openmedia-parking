<script>
    import { Card } from "@components/Card";
    import { Form, FormDivider } from "@ui/Form";
    import { Input, InputPassword } from "@ui/Input";
    import { Button } from "@ui/Button";
    import { SETTINGS } from "../settings";
    import {FIREBASE_ENDPOINTS} from "../firebaseEndpoints";

    async function handleSignInSubmit(event) {
        const data = event.detail;
        console.log(event);
        console.log(data);
        const endpointUrl = `${SETTINGS.firebaseAPI}${FIREBASE_ENDPOINTS.signIn}?key=${SETTINGS.firebaseKey}`;
        const result = await fetch(endpointUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...data.reduce((info, field) => ({
                    ...info,
                    [field.name]: field.value,
                }), {}),
                returnSecureToken: true,
            }),
        });
        console.log('result', result);
        console.log('result json', await result.json());
    }
</script>

<svelte:head>
    <title>SignIn / OpenMedia Parking</title>
</svelte:head>
<Card>
    <Form on:submit={handleSignInSubmit}>
        <Input type="email" name="email" placeholder="Email" />
        <FormDivider />
        <InputPassword name="password" placeholder="Пароль" />
        <Button slot="footer" value="Войти" />
    </Form>
</Card>