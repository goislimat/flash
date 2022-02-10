import { Button, Screen } from "../../../../src/ui";

const Welcome = () => {
  return (
    <Screen previousPage="/" title="Confira a sua cotação">
      <p>
        Aqui a gente confirma a cotação e mostra uma tela de boas vindas pro
        membro vindo da multimarcas.
      </p>
      <Button nextPage="/app/billing/pay">Ir para pagamento</Button>
    </Screen>
  );
};

export default Welcome;
