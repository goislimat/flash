import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

import { Screen } from "../../src/ui";

const Content = styled.div`
  text-align: center;
  margin: 60px 0;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const CheckList = styled.ul`
  list-style-type: none;
  text-align: left;

  li {
    margin-bottom: 8px;
    opacity: 0;
    animation: ${fadeIn} 250ms linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .one {
    animation-delay: 1000ms;
  }

  .two {
    animation-delay: 2000ms;
  }

  .three {
    animation-delay: 3000ms;
  }

  .four {
    animation-delay: 4000ms;
  }

  .five {
    animation-delay: 5000ms;
  }

  .six {
    animation-delay: 6000ms;
  }

  .seven {
    animation-delay: 7000ms;
  }
`;

const Prepare = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/quote/proposal");
    }, 8000);
  }, []);

  return (
    <Screen title="Estamos montando sua cotação">
      <Content>
        <Image
          src="/assets/quote_start.png"
          alt="homem com laptop"
          height={104}
          width={80}
        />
        <h2>Estamos montando sua cotação</h2>
        <CheckList>
          <li className="one">Identificamos você</li>
          <li className="two">Identificamos sua localização</li>
          <li className="three">Marcamos o motivo de uso do veículo</li>
          <li className="four">Registramos seu email</li>
          <li className="five">Juntamos todas as informações</li>
          <li className="six">Fazendo últimas análises</li>
          <li className="seven">Pronto! Vamos lá!!</li>
        </CheckList>
      </Content>
    </Screen>
  );
};

export default Prepare;
