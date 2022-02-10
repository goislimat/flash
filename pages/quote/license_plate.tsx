import { Button, Input, Screen } from "../../src/ui";

const LicensePlate = () => {
  return (
    <Screen previousPage="/quote" title="Placa do carro">
      <Input name="placa" label="placa do carro" value="QUZ7780" />
      <Button nextPage="vehicle">Continuar</Button>
    </Screen>
  );
};

export default LicensePlate;
