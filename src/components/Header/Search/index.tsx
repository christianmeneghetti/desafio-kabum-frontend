import React from "react";
import { LogoSearch } from "../../../assets/images/IconLogoSearch";
import * as S from "./styled";

export default function Search() {
  return (
    <S.Search>
      <S.Input type="text" placeholder="Busque aqui" />
      <S.Logo>
        <LogoSearch />
      </S.Logo>
    </S.Search>
  );
}
