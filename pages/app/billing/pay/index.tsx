import { Button, Input, Screen } from "../../../../src/ui";
import { useAppContext } from "../../../appProvider";

const Pay = () => {
  const { setPaid } = useAppContext();

  return (
    <Screen
      previousPage="/app/acquisition/partner/welcome"
      title="Dados do cartão"
    >
      <Input
        name="card_number"
        label="número do cartão"
        value="4111 1111 1111 1111"
      />
      <Input name="valid_thru" label="válide até" value="11/22" />
      <Input name="cvv" label="cvv" value="222" />
      <Input name="card_name" label="nome no cartão" value="THIAGO GOIS LIMA" />
      <Button nextPage="/app/contract" onClick={() => setPaid(true)}>
        Confirmar e Pagar
      </Button>
    </Screen>
  );
};

export default Pay;
