import { useEffect } from "react";
import { Button, Input, Screen } from "../../src/ui";
import { useAppContext } from "../appProvider";
import { fetcher } from "../../src/helpers/http";
import useSWR from "swr";

const Vehicle = () => {
  const { setVehicle, licensePlate } = useAppContext();

  const { data, error } = useSWR(`/api/vehicle/${licensePlate}`, fetcher);

  useEffect(() => {
    setVehicle(data);
  }, [data, setVehicle]);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <Screen previousPage="/quote/license_plate" title="Qual é o seu carro?">
      <Input name="make" label="fabricante" value={data?.manufacturer} />
      <Input name="year" label="ano do modelo" value={data?.year_model} />
      <Input name="model" label="versão do modelo" value={data?.model} />
      <Button nextPage="usage">Continuar</Button>
    </Screen>
  );
};

export default Vehicle;
