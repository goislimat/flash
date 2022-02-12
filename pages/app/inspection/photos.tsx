import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Screen = styled.button`
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
  border: none;
  width: 100%;

  span {
    color: white;
    font-size: 28px;
    line-height: 34px;
  }
`;

const Photos = () => {
  const router = useRouter();

  const displayInfoAndNavigate = () => {
    alert("Fotos enviadas!!");
    router.push("/app/contract");
  };

  return (
    <Screen type="button" onClick={displayInfoAndNavigate}>
      <span>Fotos</span>
    </Screen>
  );
};

export default Photos;
