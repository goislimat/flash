import styled, { css } from "styled-components";

const Button = styled.button<{ active: boolean }>`
  background: none;
  border: 1px solid black;
  border-radius: 4px;
  padding: 12px 16px;
  width: 100%;
  margin-bottom: 16px;

  text-align: left;

  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-column-gap: 16px;

  ${({ active }) =>
    active &&
    css`
      border: 1px solid #ff678e;
      background: rgba(255, 230, 236, 0.3);
    `}
`;

const CheckmarkContainer = styled.div<{ active: boolean }>`
  border: 0.5px solid gray;
  border-radius: 50%;
  padding: 1px;

  ${({ active }) =>
    active &&
    css`
      border: 0.5px solid #ff678e;
    `}
`;

const Checkmark = styled.span<{ active: boolean }>`
  height: 16px;
  width: 16px;
  display: block;
  border-radius: 50%;

  ${({ active }) =>
    active &&
    css`
      background: #ff678e;
    `}
`;

const DescriptionContainer = styled.div``;

const Title = styled.em`
  display: block;
  margin-bottom: 4px;
  font-style: normal;
`;

const Subtititle = styled.span`
  display: block;
  color: gray;
`;

interface SelectProps {
  title: string;
  subtitle: string;
  active: boolean;
}

const Select = ({ title, subtitle, active }: SelectProps) => {
  return (
    <Button active={active}>
      <CheckmarkContainer active={active}>
        <Checkmark active={active} />
      </CheckmarkContainer>
      <DescriptionContainer>
        <Title>{title}</Title>
        <Subtititle>{subtitle}</Subtititle>
      </DescriptionContainer>
    </Button>
  );
};

export default Select;
