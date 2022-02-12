import Image from "next/image";
import { ReactNode } from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gri-column-gap: 16px;
  align-items: center;

  strong {
    font-size: 14px;
    line-height: 18px;
  }
`;

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <TitleContainer>
      <strong>{children}</strong>
      <Image src="/assets/car.png" alt="carro" height={58} width={80} />
    </TitleContainer>
  );
};

export default Title;
