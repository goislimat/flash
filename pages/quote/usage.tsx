import { useState } from "react";
import { Button, Screen, Select } from "../../src/ui";

const OPTIONS = [
  {
    title: "Uso pessoal no dia a dia",
    subtitle: "Ida ao trabalho, compras e lazer",
    active: true,
  },
  {
    title: "Motorista de aplicativo",
    subtitle: "Faz Uber, 99, Cabify, etc...",
    active: false,
  },
  {
    title: "Transporte de cargas ou frete",
    subtitle: "Transporta equipamentos, móveis",
    active: false,
  },
  {
    title: "Visita de clientes ou fornecedores",
    subtitle: "Autônomo, representante comercial",
    active: false,
  },
  {
    title: "Delivery ou entregas",
    subtitle: "Entrega de mercadorias ou comida",
    active: false,
  },
];

const Usage = () => {
  const [options, setOptions] = useState(OPTIONS);

  const handleClick = (title: string) => {
    const newOptions = options.map((option) => {
      return {
        ...option,
        active: option.title === title,
      };
    });

    setOptions(newOptions);
  };

  return (
    <Screen
      previousPage="/quote/vehicle"
      title="Conta pra gente como você utiliza o carro?"
    >
      {options.map((option) => (
        <Select
          key={option.title}
          title={option.title}
          subtitle={option.subtitle}
          active={option.active}
          handleClick={handleClick}
        />
      ))}
      <Button nextPage="cep">Continuar</Button>
    </Screen>
  );
};

export default Usage;
