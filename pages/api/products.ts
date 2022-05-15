import type { NextApiRequest, NextApiResponse } from "next";
const products: Data = require("../../assets/index.json");
import RootObject from "../../types/RootObject";

type Data = {
  items: RootObject;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(products);
}
