import { ChangeEvent } from "react";
import { Button, Input, Screen } from "../../src/ui";
import { useAppContext } from "../app_provider";

const LicensePlate = () => {
  const { setLicensePlate } = useAppContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLicensePlate(event.target.value);
  }


  return (
    <Screen previousPage="/quote" title="Placa do carro">
      <Input name="placa" label="placa do carro" disabled={false} onChange={handleChange} />
      <Button nextPage="vehicle">Continuar</Button>
    </Screen>
  );
};

export default LicensePlate;
