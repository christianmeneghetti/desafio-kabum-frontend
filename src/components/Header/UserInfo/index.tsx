import React from "react";
import { IconCart } from "../../../assets/images/IconCart";
import { IconFavorite } from "../../../assets/images/IconFavorite";
import { IconSac } from "../../../assets/images/IconSac";
import { IconUser } from "../../../assets/images/IconUser";
import * as S from "./styled";

export default function UserInfo() {
  return (
    <S.Container>
      <IconUser />
      <S.User>
        <span>
          Faça
          <S.Login href="facebook.com"> Login </S.Login>
          ou
          <br /> crie seu
          <S.Cadastro href="facebook.com"> Cadastro </S.Cadastro>
        </span>
      </S.User>
    </S.Container>
  );
}
