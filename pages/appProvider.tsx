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
  setRegisteredVehicles: (vehicles: RegisteredVehicle[]) => void;
  licensePlate?: LicensePlate;
  personCpf?: Cpf;
  person?: Person;
  vehicle?: Vehicle;
  registeredVehicles?: RegisteredVehicle[];
}

interface RegisteredVehicle {
  id: string;
  protected: boolean;
  vehicle: string;
  licensePlate: string;
  year?: number;
  manufacturer?: string;
  expireIn?: number;
  inspectionState?: string;
}

const AppContextInterfaceDefaults: AppContextInterface = {
  setLicensePlate: () => null,
  setPersonCpf: () => null,
  setVehicle: () => null,
  setPerson: () => null,
  setRegisteredVehicles: () => null,
  licensePlate: undefined,
  personCpf: undefined,
  person: undefined,
  vehicle: undefined,
  registeredVehicles: [],
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
  const [registeredVehicles, setRegisteredVehicles] = useState<
    RegisteredVehicle[]
  >([
    {
      id: "1234-myid",
      protected: true,
      vehicle: "HB20 Unique 1.0 Flex 12V Mec.",
      licensePlate: "XLS 2132",
      year: 2019,
      manufacturer: "Ford",
      expireIn: 2,
      inspectionState: "done",
    },
    {
      id: "5678-mynewid",
      protected: false,
      vehicle: "Onix 1.8 Flex",
      licensePlate: "PON 8897",
    },
  ]);

  const value = {
    setLicensePlate,
    setPersonCpf,
    setVehicle,
    setPerson,
    setRegisteredVehicles,
    licensePlate,
    personCpf,
    vehicle,
    person,
    registeredVehicles,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = (): AppContextInterface => useContext(AppContext);

export { useAppContext };
export default AppProvider;
