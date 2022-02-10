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

interface ScreenProps {
  title: string;
  previousPage: string;
  children: ReactNode;
}

const Screen = ({ title, previousPage, children }: ScreenProps) => {
  return (
    <ScreenContainer>
      <BackButton previousPage={previousPage} />
      <Title>{title}</Title>

      {children}
    </ScreenContainer>
  );
};

export default Screen;
