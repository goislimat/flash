import { useEffect } from "react";
import { fetcher } from "../../src/helpers/http";
import { Screen, Button } from "../../src/ui";
import { useAppContext } from "../app_provider";

import styled from "styled-components";
import useSWR from "swr";
import Image from "next/image";

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
  const formatCurrency = (value: number | bigint | undefined) => {
    if (value) {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    }
  };

  const { personCpf, vehicle } = useAppContext();

  const { data, error } = useSWR(
    `/api/person/${personCpf}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <Screen previousPage="/" title="Cotação seguro Auto Pier">
      <Greetings>
        <strong>{data?.name?.split(" ")[0]}</strong>, aqui sua cotação!
      </Greetings>

      <ProposalContainer>
        <Model>{vehicle?.model}</Model>

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
            <span>{formatCurrency(vehicle?.value)}</span>
          </div>
        </CarValueSection>
      </ProposalContainer>

      <Button nextPage="/auth/signup">Criar conta</Button>
    </Screen>
  );
};

export default Proposal;
