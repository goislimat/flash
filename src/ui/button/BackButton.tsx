import Link from "next/link";
import styled from "styled-components";

const BackArrow = styled.a`
  display: block;
  height: 10px;
  width: 10px;
  border: none;
  border-left: 3px solid black;
  border-bottom: 3px solid black;
  border-radius: 2px;
  transform: rotate(45deg);
`;

interface BackButtonProps {
  previousPage: string;
}

const BackButton = ({ previousPage }: BackButtonProps) => {
  return (
    <Link href={previousPage} passHref>
      <BackArrow />
    </Link>
  );
};

export default BackButton;
