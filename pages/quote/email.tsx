import { Button, Input, Screen } from "../../src/ui";

const Email = () => {
  return (
    <Screen previousPage="/quote/cpf" title="Qual seu email?">
      <Input name="email" label="email" value="exemplo@pier.digital" />
      <Button nextPage="prepare">Ver cotação</Button>
    </Screen>
  );
};

export default Email;
