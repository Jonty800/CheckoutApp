import Image from "next/image";
import styled from "styled-components";
import add from "./add.svg";

type ImageProps = {
  width: number;
  height: number;
  callback: any;
};

export default function AddButton({ width, height, callback }: ImageProps) {
  return (
    <Container onClick={callback}>
      <Image src={add} layout="fixed" width={width} height={height} alt="Add" />
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
