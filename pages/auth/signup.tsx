import { Button, Input, Screen } from "../../src/ui";

const Login = () => {
  return (
    <Screen previousPage="/quote/proposal" title="Criar conta">
      <Input label="email" name="email" value="thiago.lima@pier.digital" />
      <Input label="senha" name="password" value="12345678" password />
      <Input
        label="confirmar senha"
        name="password_confirmation"
        value="12345678"
        password
      />
      <Button nextPage="/app/acquisition/partner/welcome">Criar</Button>
    </Screen>
  );
};

export default Login;
