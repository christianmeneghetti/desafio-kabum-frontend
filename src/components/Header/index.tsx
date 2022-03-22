import React from "react";
import * as S from "./styled";
import { LogoKabum } from "../../assets/images/LogoKabum";
import Search from "./Search";
import UserInfo from "./UserInfo";
import AdditionalInfo from "./AdditionalInfo";

export default function Header() {
  return (
    <S.Main>
      <S.StyledHeader>
        <S.Logo>
          <S.ALogo href="/">
            <LogoKabum />
          </S.ALogo>
        </S.Logo>
        <S.SearchDiv>
          <Search />
        </S.SearchDiv>
        <UserInfo />
        <AdditionalInfo />
      </S.StyledHeader>
    </S.Main>
  );
}
