import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "../../src/helpers/http";
import { Button, Input, Screen } from "../../src/ui";
import { useAppContext } from "../appProvider";

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
  // iddle, fetching, done
  const [fetch, setFetchState] = useState<string>("iddle");
  const [vehicle, setVehicle] = useState({
    id: "my-custom-id",
    protected: true,
    vehicle: "PRISMA Sed. LT 1.4 8V Flexpower 4p.",
    licensePlate: "QUZ7780",
    year: 2019,
    manufacturer: "GM - Chevrolet",
    expireIn: 15,
    inspectionState: "waiting",
  });

  const {
    licensePlate,
    setLicensePlate,
    registeredVehicles,
    setRegisteredVehicles,
  } = useAppContext();
  const { data, error } = useSWR(
    fetch === "fetching" ? `/api/vehicle/${licensePlate}` : null,
    fetcher
  );

  const checkLicensePlate = () => {
    const validLicensePlate = licensePlate || "QUZ7780";
    setLicensePlate(validLicensePlate);
    setFetchState("fetching");
  };

  const addVehicle = () => {
    const prevRegisteredVehicles = registeredVehicles || [];
    setRegisteredVehicles([vehicle, ...prevRegisteredVehicles]);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLicensePlate(event.target.value);
  };

  useEffect(() => {
    if (data) {
      setVehicle({
        id: data?.id,
        protected: true,
        vehicle: data?.model,
        licensePlate: data?.license_plate,
        year: data?.year_model,
        manufacturer: data?.manufacturer,
        expireIn: 15,
        inspectionState: "waiting",
      });
      setFetchState("done");
    }
  }, [data]);

  if (error) return <div>An error has occured</div>;

  return (
    <Screen previousPage="dashboard" title="Cadastrar carro" editable>
      <Input
        name="license_plate"
        label="placa do carro"
        value="QUZ7780"
        onChange={handleChange}
        disabled={false}
      />
      <AddButton type="button" onClick={checkLicensePlate}>
        Consultar
      </AddButton>

      {fetch === "fetching" && <div>Loading...</div>}

      {fetch === "done" && (
        <div>
          <Input name="make" label="fabricante" value={vehicle.manufacturer} />
          <Input name="year" label="ano do modelo" value={vehicle.year} />
          <Input
            name="model"
            label="versão do modelo"
            value={vehicle?.vehicle}
          />
          <Button nextPage="dashboard" onClick={addVehicle}>
            Confirmar cadastro
          </Button>
        </div>
      )}
    </Screen>
  );
};

export default NewVehicle;
