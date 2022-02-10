import Link from "next/link";
import { Screen } from "../../../src/ui";

const Contract = () => {
  return (
    <Screen title="Contratos">
      <Link href="/app/inspection" passHref>
        <a>
          Complete o seu cadastro fazendo a vistoria e ganhe 10% de desconto na
          próxima fatura
        </a>
      </Link>

      <p>Aqui tem o card do produto de auto dummy que não faz nada</p>

      <Link href="/" passHref>
        <a>Logout</a>
      </Link>
    </Screen>
  );
};

export default Contract;
