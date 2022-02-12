import Link from "next/link";
import { useEffect } from "react";
import styled from "styled-components";

import { Button, NotProtected, Protected, Screen } from "../../src/ui";
import { useAppContext } from "../appProvider";

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

const Dashboard = () => {
  const { registeredVehicles } = useAppContext();

  return (
    <>
      <Screen title="Veículos pré-aprovados">
        <Link href="/" passHref>
          <Logout>Logout</Logout>
        </Link>

        <VehiclesList>
          {registeredVehicles?.map((vehicle) => {
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
