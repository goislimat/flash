import Image from "next/image";
import { Button, Screen } from "../../../src/ui";

const Inspection = () => {
  return (
    <Screen previousPage="/app/contract" title="Vamos iniciar a vistoria?">
      <Image
        src="/assets/inspection_car.png"
        alt="inpection car"
        height={81}
        width={107}
      />
      <h2>Hora da vistoria!</h2>
      <p>
        A vistoria Pier é nosso jeito de analisar se conseguimos proteger seu
        carro. Separe 10 minutinhos do seu dia e prepare-se:
      </p>
      <Button nextPage="inspection/photos">Tirar fotos</Button>
    </Screen>
  );
};

export default Inspection;
