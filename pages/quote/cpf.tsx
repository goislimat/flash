import { ChangeEvent } from "react";
import { Button, Input, Screen } from "../../src/ui";
import { useAppContext } from "../appProvider";

const CPF = () => {
  const { setPersonCpf } = useAppContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPersonCpf(event.target.value);
  };

  return (
    <Screen previousPage="/quote/cep" title="Qual seu CPF?">
      <Input name="cpf" label="CPF" onChange={handleChange} />
      <Button nextPage="email">Continuar</Button>
    </Screen>
  );
};

export default CPF;
