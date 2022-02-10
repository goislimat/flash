import { Button, Screen } from "../../src/ui";

const Quote = () => {
  return (
    <Screen previousPage="/" title="Iniciar cotação">
      <p>
        Obrigado por considerar a Pier. Aqui você vai fazer uma cotação com
        todas as vantagens fornecidas por estar comprando seu carro na Flash
        Multimarcas.
      </p>
      <Button nextPage="quote/license_plate">Iniciar</Button>
    </Screen>
  );
};

export default Quote;
