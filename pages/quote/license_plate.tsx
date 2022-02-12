import { ChangeEvent } from "react";
import { Button, Input, Screen } from "../../src/ui";
import { useAppContext } from "../appProvider";

const LicensePlate = () => {
  const { licensePlate, setLicensePlate } = useAppContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLicensePlate(event.target.value);
  };

  return (
    <Screen previousPage="/quote" title="Placa do carro">
      <Input
        name="placa"
        label="placa do carro"
        disabled={false}
        value="QUZ7780"
        onChange={handleChange}
      />
      <Button
        nextPage="vehicle"
        onClick={() => setLicensePlate(licensePlate || "QUZ7780")}
      >
        Continuar
      </Button>
    </Screen>
  );
};

export default LicensePlate;
