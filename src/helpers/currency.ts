export const formatCurrency = (value: number | bigint | undefined) => {
  if (value) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }
};
