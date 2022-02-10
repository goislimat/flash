import Link from "next/link";
import styled from "styled-components";

import { Screen } from "../../src/ui";

const FloatingAddButton = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  height: 60px;
  width: 60px;
  background: #ff678e;
  border-radius: 50%;
  position: absolute;
  bottom: 24px;
  right: 24px;
  z-index: 10;
  box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.2);
`;

const Dashboard = () => {
  return (
    <Screen title="Veículos pré-aprovados">
      <Link href="/" passHref>
        <a>Logout</a>
      </Link>
      <Link href="new_vehicle" passHref>
        <FloatingAddButton>+</FloatingAddButton>
      </Link>

      <p>Aqui a gente mostra a lista de veículos</p>
    </Screen>
  );
};

export default Dashboard;
