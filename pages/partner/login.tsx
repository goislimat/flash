import { Button, Input } from "../../src/ui";

const Login = () => {
  return (
    <div>
      <h1>Login do Parceiro</h1>

      <Input label="email" name="email" value="flash@multimarcas.com.br" />
      <Input label="password" name="password" value="12345678" password />
      <Button>Botao</Button>
    </div>
  );
};

export default Login;
