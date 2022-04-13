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
import { useRouter } from "next/router";

export default function Header(props: any) {
  const { ...shipments } = props;
  const { ...departaments } = props;
  const {
    shipping,
    hamburguer,
    address,
    toggleAddres,
    toggleHamburguer,
    onSelectShipping,
    favoriteCount,
    cartCount,
  } = props;

  const auth = useAuth();
  const router = useRouter();
  const onLogout = () => {
    auth.logout();
    router.reload();
  };

  return (
    <S.Main>
      <S.Header>
        <S.StyledHeader>
          {auth.email ? (
            <HamburguerMenu
              onLogout={onLogout}
              hamburguer={hamburguer}
              toggleHamburguer={toggleHamburguer}
            />
          ) : (
            ""
          )}
          <S.Logo>
            <S.ALogo href="/">
              <LogoKabum />
            </S.ALogo>
          </S.Logo>
          <S.SearchDiv theme={auth.email ? "margin-top: 1.7rem;" : ""}>
            <Search />
            {auth.email ? (
              <AddressPrincipal
                address={address}
                onSelectShipping={onSelectShipping}
                shipping={shipping}
                toggleAddres={toggleAddres}
                shipments={shipments}
              />
            ) : (
              ""
            )}
          </S.SearchDiv>
          <UserInfo onLogout={onLogout} />
          <AdditionalInfo favoriteCount={favoriteCount} cartCount={cartCount} />
        </S.StyledHeader>
      </S.Header>
      {auth.email ? <ExpansiveMenu departaments={departaments} /> : ""}
    </S.Main>
  );
}
