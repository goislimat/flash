import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";
import { formatCurrency } from "../../../src/helpers/currency";
import { Screen } from "../../../src/ui";
import { useAppContext } from "../../appProvider";

const Banner = styled.a`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 16px;
  text-decoration: none;
  background: #ffea9f;
  padding: 16px;
  color: black;
  border-radius: 4px;

  font-size: 12px;
  line-height: 18px;

  strong {
    font-size: 12px;
    line-height: 16px;
    color: #24263b;
  }
`;

const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActionButtonBanner = styled.div<{ color?: string }>`
  background: #303042;
  ${({ color }) =>
    color === "pink" &&
    css`
      background: #ff678e;
    `}
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  border-radius: 50%;

  span {
    border-right: 2px solid white;
    border-top: 2px solid white;
    display: block;
    height: 6px;
    width: 6px;
    transform: rotate(45deg);
  }
`;

const Logout = styled.a`
  position: absolute;
  bottom: 24px;
  right: 24px;
  background: white;
`;

const Container = styled.div`
  box-shadow: 0px 2px 20px rgba(48, 48, 66, 0.2);
  margin: 32px 0 24px;
  border-radius: 4px;
  padding: 24px;
`;

const ProtectedSection = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;

  strong {
    font-size: 11px;
    line-height: 20px;
    text-transform: uppercase;
    color: #68a462;

    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 4px;
    align-items: center;
  }
`;

const VehicleSection = styled.div`
  margin-bottom: 20px;

  * {
    display: block;
  }

  span {
    font-size: 12px;
    line-height: 18px;
    color: #a3a5ae;
  }

  strong {
    font-size: 18px;
    line-height: 24px;
    color: #24263b;
  }
`;

const PriceSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  align-items: center;

  div > span {
    display: block;
    font-size: 12px;
    line-height: 18px;
    color: #a3a5ae;
  }

  strong {
    font-size: 14px;
    line-height: 20px;
    color: #24263b;
  }
`;

const CheckContainer = styled.div`
  background: #68a462;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contract = () => {
  const { vehicle, inspected } = useAppContext();

  return (
    <Screen title="Contratos">
      {!inspected && (
        <Link href="/app/inspection" passHref>
          <Banner>
            <div>
              <strong>Vistoria pendente</strong>
              <p>Faça vistoria e ganha 10% de desconto na próxima fatura</p>
            </div>
            <ActionButtonContainer>
              <ActionButtonBanner>
                <span />
              </ActionButtonBanner>
            </ActionButtonContainer>
          </Banner>
        </Link>
      )}

      <Container>
        <ProtectedSection>
          <strong>
            <CheckContainer>
              <Image
                src="/assets/check.png"
                alt="check"
                width={5.62}
                height={4.2}
              />
            </CheckContainer>
            protegido
          </strong>
          <Image src="/assets/car.png" alt="carro" height={52} width={71} />
        </ProtectedSection>

        <VehicleSection>
          <span>Seguro Auto</span>
          <strong>{vehicle?.model}</strong>
        </VehicleSection>

        <PriceSection>
          <div>
            <span>Reembolso</span>
            <strong>{formatCurrency(vehicle?.value)}</strong>
          </div>

          <div>
            <span>Mensalidade</span>
            <strong>R$ 39,90</strong>
          </div>

          <div>
            <ActionButtonContainer>
              <ActionButtonBanner color="pink">
                <span />
              </ActionButtonBanner>
            </ActionButtonContainer>
          </div>
        </PriceSection>
      </Container>

      <Link href="/" passHref>
        <Logout>Logout</Logout>
      </Link>
    </Screen>
  );
};

export default Contract;
