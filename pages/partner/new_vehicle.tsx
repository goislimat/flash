import { useState } from "react";
import styled from "styled-components";
import { Button, Input, Screen } from "../../src/ui";

const AddButton = styled.button`
  display: block;
  text-align: center;
  background: #ff678e;
  color: white;
  padding: 16px;
  border-radius: 4px;
  width: 100%;
  border: none;
  margin-bottom: 32px;
  text-transform: uppercase;
  font-weight: bold;
`;

const NewVehicle = () => {
  const [visible, setVisibility] = useState<boolean>(false);

  const checkLicensePlate = () => {
    setVisibility(true);
  };

  return (
    <Screen previousPage="dashboard" title="Cadastrar carro">
      <Input name="license_plate" label="placa do carro" value="QUZ7780" />
      <AddButton type="button" onClick={checkLicensePlate}>
        Consultar
      </AddButton>

      {visible && (
        <div>
          <Input name="make" label="fabricante" value="GM - Chevrolet" />
          <Input name="year" label="ano do modelo" value="2019" />
          <Input
            name="model"
            label="versão do modelo"
            value="PRISMA Sed. LT 1.4 8V Flexpower 4p."
          />
          <Button nextPage="dashboard">Confirmar cadastro</Button>
        </div>
      )}
    </Screen>
  );
};

export default NewVehicle;
