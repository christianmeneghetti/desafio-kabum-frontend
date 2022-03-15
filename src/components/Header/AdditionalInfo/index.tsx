import React from "react";
import { IconCart } from "../../../assets/images/IconCart";
import { IconFavorite } from "../../../assets/images/IconFavorite";
import { IconSac } from "../../../assets/images/IconSac";
import { IconUser } from "../../../assets/images/IconUser";
import * as S from "./styled";

export default function AdditionalInfo() {
  return (
    <S.Container>
      <S.Sac>
        <IconSac />
      </S.Sac>

      <S.Favorite>
        <IconFavorite />
      </S.Favorite>

      <S.Cart>
        <IconCart />
      </S.Cart>
    </S.Container>
  );
}
