import Image from "next/image";
import bin from "./bin.svg";
import styled from "styled-components";

export default function BinIcon() {
  return (
    <StyledImage src={bin} layout="fixed" width={18} height={20} alt="bin" />
  );
}

const StyledImage = styled(Image)`
  cursor: pointer;
`;
