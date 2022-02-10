import { Button, Input, Screen } from "../../src/ui";

const CEP = () => {
  return (
    <Screen previousPage="/quote/usage" title="Qual seu endereço?">
      <Input name="cep" label="CEP" value="13214-661" />
      <Button nextPage="cpf">Continuar</Button>
    </Screen>
  );
};

export default CEP;
