import { ReactNode } from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  padding: 16px;
  font-weight: bold;
  text-decoration: none;
  background-color: #ff678e;
  width: 100%;
  color: white;
  text-transform: uppercase;
  border-radius: 4px;
  font-size: 16px;
  line-height: 22px;
`;

interface ButtonProps {
  nextPage: string;
  children: ReactNode;
}

const Button = ({ nextPage, children }: ButtonProps) => {
  return (
    <Link href={nextPage} passHref>
      <StyledButton>{children}</StyledButton>
    </Link>
  );
};

export default Button;
