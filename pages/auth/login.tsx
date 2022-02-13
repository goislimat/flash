import { Button, Input, Screen } from "../../src/ui";
import { useAppContext } from "../appProvider";

const Login = () => {
  const { paid } = useAppContext();

  return (
    <Screen previousPage="/" title="Entrar">
      <Input label="email" name="email" value="exemplo@pier.digital" />
      <Input label="senha" name="password" value="12345678" password />
      <Button
        nextPage={paid ? "/app/contract" : "/app/acquisition/partner/welcome"}
      >
        Login
      </Button>
    </Screen>
  );
};

export default Login;
