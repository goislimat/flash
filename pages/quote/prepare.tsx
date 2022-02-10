import { useRouter } from "next/router";
import { useEffect } from "react";

import { Screen } from "../../src/ui";

const Prepare = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/quote/proposal");
    }, 2000);
  }, []);

  return (
    <Screen title="Estamos montando sua cotação">
      <p>Loading mostrando tudo o que foi analisado</p>
      <p>Loading aqui!!</p>
    </Screen>
  );
};

export default Prepare;
