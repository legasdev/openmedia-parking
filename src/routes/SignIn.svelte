<script>
    import { Card, CardHeader } from "@components/Card";
    import { Form, FormDivider } from "@components/Form";
    import { Input } from "@ui/Input";
</script>

<Card>
    <CardHeader slot="header" title="Войти" />
    <Form>
        <Input type="text" placeholder="Введите свой email" />
        <FormDivider />
        <Input type="text" placeholder="Введите свой email" />
    </Form>
</Card>