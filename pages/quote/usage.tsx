import { Button, Screen } from "../../src/ui";

const Usage = () => {
  return (
    <Screen
      previousPage="/quote/vehicle"
      title="Conta pra gente como você utiliza o carro?"
    >
      <p>Opções de uso do carro</p>
      <Button nextPage="cep">Continuar</Button>
    </Screen>
  );
};

export default Usage;
