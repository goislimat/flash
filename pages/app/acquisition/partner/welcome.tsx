import Image from "next/image";
import styled from "styled-components";
import { Button, Screen } from "../../../../src/ui";

const Content = styled.div`
  margin: 60px 0;
`;

const MainCard = styled.div`
  background: white;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 24px;
  margin-bottom: 32px;
`;

const MainCardContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 24px;
`;

const PriceContainer = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: #787982;

  & > span {
    display: block;
  }
`;

const Price = styled.span`
  color: black;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;

  & > em {
    font-style: normal;
    font-size: 32px;
    line-height: 40px;
  }
`;

const PlanContainer = styled.div`
  margin-bottom: 32px;

  h2 {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 28px;
  }

  & > div {
    display: grid;
    grid-template-columns: 1fr auto;
  }

  span {
    font-size: 16px;
    line-height: 24px;
    display: block;
  }

  em {
    font-style: normal;
    font-size: 14px;
    line-height: 18px;
    color: #787982;
  }
`;

const CarContainer = styled.div`
  margin-bottom: 32px;

  h2 {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 28px;
  }

  & > div {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e4e4e4;
  }

  span {
    color: #787982;
    display: block;
    font-size: 14px;
    line-height: 18px;
  }

  em {
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
  }
`;

const SectionLine = styled.div`
  margin: 0 -24px 32px;
  background: #e4e4e4;
  height: 4px;
`;

const Welcome = () => {
  return (
    <Screen previousPage="/" title="Confira a sua cotação">
      <Content>
        <MainCard>
          <MainCardContent>
            <PriceContainer>
              <span>Mensalidade</span>
              <Price>
                R$<em>89,90</em>
              </Price>
            </PriceContainer>

            <Image src="/assets/car.png" alt="car" width={80} height={60} />
          </MainCardContent>

          <Button nextPage="/app/billing/pay">Ir para pagamento</Button>
        </MainCard>

        <PlanContainer>
          <h2>Seu plano</h2>
          <div>
            <div>
              <span>Roubo e Furto + Assistências 24h</span>
              <em>R$ 89,90/mês</em>
            </div>
            <div>
              <Image src="/assets/lock.png" alt="lock" height={13} width={13} />
            </div>
          </div>
        </PlanContainer>

        <SectionLine />

        <CarContainer>
          <h2>Carro</h2>

          <div>
            <span>Modelo</span>
            <em>PRISMA Sed. LT 1.4 8V Flexpower 4p.</em>
          </div>
          <div>
            <span>Placa</span>
            <em>QUZ-7780</em>
          </div>
          <div>
            <span>Cobertura</span>
            <em>100% da Tabela FIPE</em>
          </div>
          <div>
            <span>Valor da cobertura</span>
            <em>R$ 54.325,00</em>
          </div>
        </CarContainer>
      </Content>
    </Screen>
  );
};

export default Welcome;
