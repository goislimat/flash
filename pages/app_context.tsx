import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Person = {
  name: string,
  addresses: Array<Map<string, string>>
}

type Vehicle = {
  year_manufacturing: string,
  year_model: string,
  model: string,
  manufacturer: string,
  license_plate: string,
  state: string,
  city: string,
  vehicle_id: string,
}

type LicensePlate = string;

interface AppContextInterface {
  setLicensePlate: (newLicensePlate: LicensePlate) => void;
  setVehicle: (newVehicle: Vehicle) => void;
  setPerson: (newPerson: Person) => void;
  licensePlate?: LicensePlate;
  person?: Person;
  vehicle?: Vehicle;
}

const AppContextInterfaceDefaults: AppContextInterface = {
  setLicensePlate: () => null,
  setVehicle: () => null,
  setPerson: () => null,
  licensePlate: undefined,
  person: undefined,
  vehicle: undefined,
}

const AppContext = createContext<AppContextInterface>(AppContextInterfaceDefaults);

type Props = {
    children: ReactNode;
};

const AppContextProvider = ({ children }: Props) => {
  const [vehicle, setVehicle] = useState<Vehicle>();
  const [licensePlate, setLicensePlate] = useState<LicensePlate>();
  const [person, setPerson] = useState<Person>();

  useEffect(() => {
    console.log(licensePlate)
  }, [licensePlate])

  const value = {
    setLicensePlate,
    setVehicle,
    setPerson,
    licensePlate,
    vehicle,
    person,
  };

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
}

const useAppContext = (): AppContextInterface => useContext(AppContext);

export { AppContextProvider, useAppContext };