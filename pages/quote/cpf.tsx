import { ChangeEvent } from "react";
import { Button, Input, Screen } from "../../src/ui";
import { useAppContext } from "../appProvider";

const CPF = () => {
  const { personCpf, setPersonCpf } = useAppContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPersonCpf(event.target.value);
  };

  return (
    <Screen previousPage="/quote/cep" title="Qual seu CPF?" editable>
      <Input
        name="cpf"
        label="CPF"
        onChange={handleChange}
        value="123.456.789-00"
        disabled={false}
      />
      <Button
        nextPage="email"
        onClick={() => setPersonCpf(personCpf || "123.456.789-00")}
      >
        Continuar
      </Button>
    </Screen>
  );
};

export default CPF;
