import React from "react";
import * as S from "./styled";
import { LogoKabum } from "../../assets/images/LogoKabum";
import Search from "./Search";
import UserInfo from "./UserInfo";
import AdditionalInfo from "./AdditionalInfo";

export default function Header(props: any) {
  const { favoriteCount } = props;
  const { cartCount } = props;
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
        <AdditionalInfo favoriteCount={favoriteCount} cartCount={cartCount} />
      </S.StyledHeader>
    </S.Main>
  );
}
