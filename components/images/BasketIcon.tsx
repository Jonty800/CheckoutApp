import Image from "next/image";
import basket from "./basket.svg";

type ImageProps = {
  width: number;
  height: number;
};

export default function BasketIcon({ width, height }: ImageProps) {
  return (
    <div className="basket-icon">
      <Image
        src={basket}
        layout="fixed"
        width={width}
        height={height}
        alt="basket"
      />
    </div>
  );
}
