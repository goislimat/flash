import { Button, Input, Screen } from "../../src/ui";

const Login = () => {
  return (
    <Screen previousPage="/" title="Entrar">
      <Input label="email" name="email" value="exemplo@pier.digital" />
      <Input label="senha" name="password" value="12345678" password />
      <Button nextPage="/app/acquisition/partner/welcome">Login</Button>
    </Screen>
  );
};

export default Login;
