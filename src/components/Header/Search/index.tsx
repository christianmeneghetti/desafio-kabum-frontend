import React from "react";
import { LogoSearch } from "../../../assets/images/LogoSearch";
import * as S from "./styled";

export default function Search() {
  return (
    <>
      <S.Input type="text" placeholder="Busque aqui" />
      <S.Logo>
        <LogoSearch />
      </S.Logo>
    </>
  );
}
