import React from "react";
import * as S from "./styled";
import { LogoKabum } from "../../assets/images/LogoKabum";
import Search from "./Search";
import UserInfo from "./UserInfo";

export default function Header() {
  return (
    <S.StyledHeader>
      <LogoKabum />
      <div>
        <Search />
      </div>
      <UserInfo />
    </S.StyledHeader>
  );
}
