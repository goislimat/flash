import { Button, Input, Screen } from "../../src/ui";

const Vehicle = () => {
  return (
    <Screen previousPage="/quote/license_plate" title="Qual é o seu carro?">
      <Input name="make" label="fabricante" value="GM - Chevrolet" />
      <Input name="year" label="ano do modelo" value="2019" />
      <Input
        name="model"
        label="versão do modelo"
        value="PRISMA Sed. LT 1.4 8V Flexpower 4p."
      />
      <Button nextPage="usage">Continuar</Button>
    </Screen>
  );
};

export default Vehicle;
