import { Button, Input, Screen } from "../../src/ui";

const Login = () => {
  return (
    <Screen previousPage="/" title="Multimarcas login">
      <Input label="email" name="email" value="flash@multimarcas.com.br" />
      <Input label="password" name="password" value="12345678" password />
      <Button nextPage="dashboard">Login</Button>
    </Screen>
  );
};

export default Login;
