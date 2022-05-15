import styled from "styled-components";

type Props = {
  children: any | undefined;
  onClick: any;
  extraCss?: string | undefined;
  disabled?: boolean | undefined;
};

export default function Button({
  children,
  onClick,
  disabled,
  extraCss,
}: Props) {
  return (
    <StyledButton disabled={disabled} onClick={onClick} extraCss={extraCss}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<Props>`
  padding: 10px;
  font-family: "LibreFranklinRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.33px;
  text-transform: uppercase;
  color: #ffffff;
  width: fit-content;
  mix-blend-mode: normal;
  opacity: 0.87;
  background: #448aff;
  border-radius: 3px;
  cursor: pointer;
  border-color: transparent;

  ${(props) =>
    props.disabled
      ? `filter: grayscale(100%) opacity(0.5); cursor: not-allowed;`
      : `&:hover {
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.14)) drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.12)) drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.2));
  }`}
  ${(props) => (props.extraCss ? props.extraCss : "")}
`;
