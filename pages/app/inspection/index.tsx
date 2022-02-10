import { Button, Screen } from "../../../src/ui";

const Inspection = () => {
  return (
    <Screen previousPage="/app/contract" title="Vamos iniciar a vistoria?">
      <p>Aqui a gente mostra as instruções da vistoria</p>
      <Button nextPage="inspection/photos">Tirar fotos</Button>
    </Screen>
  );
};

export default Inspection;
