import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  z-index: 11;
  background: #444;
  opacity: 0.7;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Content = styled.div`
  z-index: 12;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;

  & > div {
    background: white;
    width: 100%;
    padding: 24px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h6 {
    margin-top: 32px;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 16px;
  }

  p {
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    margin-bottom: 32px;
  }
`;

const Button = styled.button`
  background: #ff678e;
  border-radius: 4px;
  display: block;
  color: white;
  border: none;
  text-transform: uppercase;

  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  padding: 12px;
`;

const Modal = () => {
  const [visible, setVisibility] = useState<boolean>(true);

  useEffect(() => {
    document.body.style.overflowY = visible ? "hidden" : "auto";
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <Overlay />
      <Content>
        <div>
          <Image
            src="/assets/amigos.png"
            alt="amigos"
            height={100}
            width={120}
          />
          <h6>Já estamos quase lá!</h6>
          <p>
            A <strong>Pier</strong> e a <strong>Flash Multimarcas</strong>{" "}
            trabalharam juntas para te trazer uma experiência de contratação bem
            rápida. Você está a poucos passos de já sair dirigindo seu carro
            protegido pela Pier.
          </p>
          <Button type="button" onClick={() => setVisibility(false)}>
            Continuar
          </Button>
        </div>
      </Content>
    </>
  );
};

export default Modal;
