import React from "react";
import * as S from "./styled";
import { LogoKabum } from "../../assets/images/LogoKabum";
import Search from "./Search";
import UserInfo from "./UserInfo";
import AdditionalInfo from "./AdditionalInfo";
import AddressPrincipal from "./AddressPrincipal";
import { useAuth } from "../../hooks/useAuth";
import HamburguerMenu from "./HamburguerMenu";
import ExpansiveMenu from "./ExpansiveMenu";

export default function Header(props: any) {
  const { favoriteCount } = props;
  const { cartCount } = props;
  const auth = useAuth();
  return (
    <S.Main>
      <S.Header>
        <S.StyledHeader>
          {auth.email ? <HamburguerMenu /> : ""}
          <S.Logo>
            <S.ALogo href="/">
              <LogoKabum />
            </S.ALogo>
          </S.Logo>
          <S.SearchDiv theme={auth.email ? "margin-top: 1.7rem;" : ""}>
            <Search />
            {auth.email ? <AddressPrincipal /> : ""}
          </S.SearchDiv>
          <UserInfo />
          <AdditionalInfo favoriteCount={favoriteCount} cartCount={cartCount} />
        </S.StyledHeader>
      </S.Header>
      {auth.email ? <ExpansiveMenu /> : ""}
    </S.Main>
  );
}
