import React from "react";
import { IconIdentification } from "../../../assets/images/IconIdentification";
import * as S from "./styled";

export default function Top() {
  return (
    <S.DivTop>
      <IconIdentification />
      <S.H1Top>Identificação</S.H1Top>
    </S.DivTop>
  );
}
