import type { NextApiRequest, NextApiResponse } from "next";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

type Data = {
  name: string;
  addresses: Array<Map<string, string>>;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = "https://api.consultasdeveiculos.com/pessoas/localizacao";
  const { cpf } = req.query;

  const encodedUrl = new URLSearchParams();
  encodedUrl.append("auth_token", process.env.DATACUBE_TOKEN || "");
  encodedUrl.append("cpf", `${cpf}`);

  const validCpf =
    typeof cpf === "string"
      ? cpf.replace(/[\.\-]/gi, "")
      : cpf[0].replace(/[\.\-]/gi, "");

  // this block intercepts this license plate for a fake API
  // call for speed purposes
  if (/12345678900/gi.test(validCpf)) {
    const staticResponse = new Map();
    staticResponse.set("Caetano", "Jundiaí");

    return res.status(200).json({
      name: "Exemplo",
      addresses: [staticResponse],
    });
  }

  try {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      method: "POST",
      body: encodedUrl,
      redirect: "follow",
    });

    if (response.status >= 400) {
      return res.status(400);
    }

    const data = await response.json();
    const result = data?.result;

    return res.status(200).json({
      name: result?.cadastro?.nome,
      addresses: result?.enderecos,
    });
  } catch (error) {
    return res.status(500);
  }
}
