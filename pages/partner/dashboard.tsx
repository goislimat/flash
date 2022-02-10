import Link from "next/link";
import { Screen } from "../../src/ui";

const Dashboard = () => {
  return (
    <Screen title="veículos pré aprovados">
      <Link href="/" passHref>
        <a>Logout</a>
      </Link>
      <Link href="new_vehicle" passHref>
        <a>+</a>
      </Link>

      <p>Aqui a gente mostra a lista de veículos</p>
    </Screen>
  );
};

export default Dashboard;
