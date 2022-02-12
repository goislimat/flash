import type { NextApiRequest, NextApiResponse } from "next";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

type Data = {
  year_manufacturing: string;
  year_model: string;
  model: string;
  manufacturer: string;
  license_plate: string;
  state: string;
  city: string;
  vehicle_id: string;
  value: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = "https://api.consultasdeveiculos.com/veiculos/informacao-simples";
  const { license_plate } = req.query;

  const encodedUrl = new URLSearchParams();
  encodedUrl.append("auth_token", process.env.DATACUBE_TOKEN || "");
  encodedUrl.append("placa", `${license_plate}`);

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
      year_manufacturing: result?.ano_fabricacao,
      year_model: result?.ano_modelo,
      model: result?.fipe_possivel[0]?.modelo,
      manufacturer: result?.fipe_possivel[0]?.marca,
      license_plate: result?.placa,
      state: result?.uf,
      city: result?.municipio,
      vehicle_id: result?.renavam,
      value: result?.fipe_possivel[0]?.valor,
    });
  } catch (error) {
    return res.status(500);
  }
}
