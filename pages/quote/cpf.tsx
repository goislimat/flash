import { Button, Input, Screen } from "../../src/ui";

const CPF = () => {
  return (
    <Screen previousPage="/quote/cep" title="Qual seu CPF?">
      <Input name="cpf" label="CPF" value="123.456.789-00" />
      <Button nextPage="email">Continuar</Button>
    </Screen>
  );
};

export default CPF;
