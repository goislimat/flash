import Link from "next/link";
import styled from "styled-components";

import { Button, NotProtected, Protected, Screen } from "../../src/ui";

const Logout = styled.a`
  display: block;
  text-align: right;
`;

const FloatingContainer = styled.div`
  background: #f0f0f0;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 16px 24px 32px;
  border-top: 4px solid #e4e4e4;
`;

const VehiclesList = styled.div`
  background: #f0f0f0;
  margin: 32px -24px 0;
  padding: 24px 24px 110px;

  & > div:not(:last-of-type) {
    border-bottom: 4px solid #e4e4e4;
    margin-bottom: 32px;
  }
`;

const REGISTERED_VEHICLES = [
  {
    id: "1234-myid",
    protected: true,
    vehicle: "HB20 Unique 1.0 Flex 12V Mec.",
    licensePlate: "XLS 2132",
    year: "2019",
    manufacturer: "Ford",
    expireIn: 19,
    inspectionState: "waiting",
  },
  {
    id: "5678-mynewid",
    protected: false,
    vehicle: "Onix 1.8 Flex",
    licensePlate: "PON 8897",
  },
];

const Dashboard = () => {
  return (
    <>
      <Screen title="Veículos pré-aprovados">
        <Link href="/" passHref>
          <Logout>Logout</Logout>
        </Link>

        <VehiclesList>
          {REGISTERED_VEHICLES.map((vehicle) => {
            if (vehicle.protected)
              return <Protected key={vehicle.id} vehicle={vehicle} />;

            return <NotProtected key={vehicle.id} vehicle={vehicle} />;
          })}
        </VehiclesList>
      </Screen>
      <FloatingContainer>
        <Button nextPage="new_vehicle">Pré-aprovar outro veículo</Button>
      </FloatingContainer>
    </>
  );
};

export default Dashboard;
