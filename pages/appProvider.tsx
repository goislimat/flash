import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Person = {
  name: string;
  addresses: Array<Map<string, string>>;
};

type Vehicle = {
  year_manufacturing: string;
  year_model: string;
  model: string;
  manufacturer: string;
  license_plate: string;
  state: string;
  city: string;
  vehicle_id: string;
  value: number;
};

type LicensePlate = string;
type Cpf = string;

interface AppContextInterface {
  setLicensePlate: (newLicensePlate: LicensePlate) => void;
  setPersonCpf: (newPersonCpf: Cpf) => void;
  setVehicle: (newVehicle: Vehicle) => void;
  setPerson: (newPerson: Person) => void;
  licensePlate?: LicensePlate;
  personCpf?: Cpf;
  person?: Person;
  vehicle?: Vehicle;
}

const AppContextInterfaceDefaults: AppContextInterface = {
  setLicensePlate: () => null,
  setPersonCpf: () => null,
  setVehicle: () => null,
  setPerson: () => null,
  licensePlate: undefined,
  personCpf: undefined,
  person: undefined,
  vehicle: undefined,
};

const AppContext = createContext<AppContextInterface>(
  AppContextInterfaceDefaults
);

type Props = {
  children: ReactNode;
};

const AppProvider = ({ children }: Props) => {
  const [vehicle, setVehicle] = useState<Vehicle>();
  const [licensePlate, setLicensePlate] = useState<LicensePlate>();
  const [personCpf, setPersonCpf] = useState<LicensePlate>();
  const [person, setPerson] = useState<Person>();

  const value = {
    setLicensePlate,
    setPersonCpf,
    setVehicle,
    setPerson,
    licensePlate,
    personCpf,
    vehicle,
    person,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = (): AppContextInterface => useContext(AppContext);

export { useAppContext };
export default AppProvider;
