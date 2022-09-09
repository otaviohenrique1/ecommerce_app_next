import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

type BotaoTesteProps = ButtonHTMLAttributes<HTMLButtonElement> &ButtonStyledProps;

export function BotaoTeste(props: BotaoTesteProps) {
  return (
    <ButtonStyled {...props} />
  );
}

type ButtonStyledProps = {
  width: string;
  height: string;
}

const ButtonStyled = styled.button<ButtonStyledProps>(props => ({
  width: props.width && 'auto',
  height: props.height && 'auto'
}))

