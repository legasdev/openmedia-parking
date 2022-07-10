<script>
    import { Card } from "@components/Card";
    import { Form, FormDivider } from "@ui/Form";
    import { Input, InputPassword } from "@ui/Input";
    import { Button } from "@ui/Button";

    function handleSignInSubmit(event) {
        const data = event.detail;
        console.log(event);
        console.log(data);
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