import { Screen, Button } from "../../src/ui";

const Proposal = () => {
  return (
    <Screen previousPage="/" title="Sua cotação">
      <p>aqui mostra os dados e valores da cotação</p>
      <Button nextPage="/auth/signup">Criar conta</Button>
    </Screen>
  );
};

export default Proposal;
