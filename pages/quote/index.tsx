import Image from "next/image";
import styled from "styled-components";

import { Button, Screen } from "../../src/ui";

const Content = styled.div`
  text-align: center;
  margin: 60px 0;
`;

const Quote = () => {
  return (
    <Screen previousPage="/" title="Iniciar cotação">
      <Content>
        <Image
          src="/assets/quote_start.png"
          alt="homem com laptop"
          height={104}
          width={80}
        />
        <h2>Vamos começar sua cotação</h2>
        <p>
          Obrigado por considerar a Pier. Aqui você vai fazer uma cotação com
          todas as vantagens fornecidas por estar comprando seu carro na Flash
          Multimarcas.
        </p>
      </Content>
      <Button nextPage="quote/license_plate">Iniciar</Button>
    </Screen>
  );
};

export default Quote;
