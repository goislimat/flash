import Image from "next/image";
import styled from "styled-components";

import { Screen, Button } from "../../src/ui";

const Greetings = styled.p`
  margin-bottom: 32px;
  font-size: 18px;
  line-height: 24px;
`;

const ProposalContainer = styled.div`
  background: #f5f5f5;
  margin: 0px -24px 32px;
  padding: 32px 24px;
  font-size: 14px;
  line-height: 18px;
`;

const Model = styled.p`
  color: gray;
  margin-bottom: 32px;
`;

const PriceContainer = styled.div`
  margin-bottom: 32px;
`;

const PriceContainerTitle = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
`;

const ValuesContainer = styled.p`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
`;

const Price = styled.div`
  font-weight: bold;

  & > span {
    font-size: 18px;
    line-height: 24px;
  }
  & > em {
    font-style: normal;
    font-size: 40px;
    line-height: 48px;
`;

const SectionLine = styled.div`
  margin: 0 -24px 32px;
  background: #e4e4e4;
  height: 4px;
`;

const CoveragesSection = styled.div`
  margin-bottom: 32px;
  font-size: 14px;
  line-height: 18px;

  & > div {
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 8px;
  }
`;

const CarValueSection = styled.div`
  font-size: 14px;
  line-height: 18px;

  & > div {
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 8px;
  }

  strong {
    margin-bottom: 16px;
    display: block;
  }

  span {
    color: #787982;
  }
`;

const Proposal = () => {
  return (
    <Screen previousPage="/" title="Cotação seguro Auto Pier">
      <Greetings>
        <strong>Thiago</strong>, aqui sua cotação!
      </Greetings>

      <ProposalContainer>
        <Model>PRISMA Sed. LT 1.4 8V Flexpower 4p.</Model>

        <PriceContainer>
          <PriceContainerTitle>Mensalidade</PriceContainerTitle>

          <ValuesContainer>
            <Price>
              <span>R$</span>
              <em>89,90</em>
              <span>/mês</span>
            </Price>

            <div>
              <Image src="/assets/car.png" alt="car" width={80} height={60} />
            </div>
          </ValuesContainer>
        </PriceContainer>
        <SectionLine />

        <CoveragesSection>
          <div>
            <span>Roubo e Furto + Assistências 24h</span>
            <span>R$ 91,66</span>
          </div>
          <div>
            <strong>Valor total</strong>
            <strong>R$ 91,66</strong>
          </div>
        </CoveragesSection>
        <SectionLine />

        <CarValueSection>
          <strong>Cobertura do carro</strong>
          <div>
            <span>100% da Tabela Fipe:</span>
            <span>R$ 54.325,00</span>
          </div>
        </CarValueSection>
      </ProposalContainer>

      <Button nextPage="/auth/signup">Criar conta</Button>
    </Screen>
  );
};

export default Proposal;
