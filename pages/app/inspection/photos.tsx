import Link from "next/link";
import styled from "styled-components";

const Screen = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #24263b;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  span {
    color: white;
    font-size: 28px;
    line-height: 34px;
  }
`;

const Photos = () => {
  return (
    <Link href="/app/contract" passHref>
      <Screen>
        <span>Fotos</span>
      </Screen>
    </Link>
  );
};

export default Photos;
