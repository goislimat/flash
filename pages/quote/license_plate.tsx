import { Button, Input } from "../../src/ui";

const LicensePlate = () => {
  return (
    <div>
      <h1>Placa do carro</h1>

      <Input name="placa" label="placa do carro" value="QUZ7780" />
      <Button nextPage="vehicle">Continuar</Button>
    </div>
  );
};

export default LicensePlate;
