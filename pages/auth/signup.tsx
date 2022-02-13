import { Button, Input, Screen } from "../../src/ui";
import { useAppContext } from "../appProvider";

const Signup = () => {
  const { setPaid, setInspected } = useAppContext();

  return (
    <Screen previousPage="/quote/proposal" title="Criar conta">
      <Input label="email" name="email" value="exemplo@pier.digital" />
      <Input label="senha" name="password" value="12345678" password />
      <Input
        label="confirmar senha"
        name="password_confirmation"
        value="12345678"
        password
      />
      <Button
        nextPage="/app/acquisition/partner/welcome"
        onClick={() => {
          setPaid(false);
          setInspected(false);
        }}
      >
        Criar
      </Button>
    </Screen>
  );
};

export default Signup;
