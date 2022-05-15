import Image from "next/image";
import styled from "styled-components";
import minus from "./minus.svg";

type ImageProps = {
  width: number;
  height: number;
  callback: any;
};

export default function MinusButton({ width, height, callback }: ImageProps) {
  return (
    <Container onClick={callback}>
      <Image
        src={minus}
        layout="fixed"
        width={width}
        height={height}
        alt="Minus"
      />
    </Container>
  );
}

const Container = styled.div`
  width: 33%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
