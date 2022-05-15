import type { NextApiRequest, NextApiResponse } from "next";
const products: Data = require("../../assets/index.json");
import RootObject from "../../types/RootObject";

type Data = {
  items: RootObject; // NOTE: This is the type of the data that is returned from the API
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(products);
}
