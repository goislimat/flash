import { ReactNode } from "react";
import styled from "styled-components";

import BackButton from "../button/BackButton";

const ScreenContainer = styled.div`
  padding: 32px 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 40px;
`;

const Editable = styled.span`
  display: block;
  position: fixed;
  top: 24px;
  right: 24px;
  padding: 4px 8px;
  background: #ff7156;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  z-index: 10;
  font-size: 10px;
`;

interface ScreenProps {
  title: string;
  previousPage?: string;
  editable?: boolean;
  children: ReactNode;
}

const Screen = ({ title, previousPage, editable, children }: ScreenProps) => {
  return (
    <ScreenContainer>
      {editable && <Editable>Sou editável</Editable>}
      {previousPage && <BackButton previousPage={previousPage} />}
      <Title>{title}</Title>

      {children}
    </ScreenContainer>
  );
};

export default Screen;
