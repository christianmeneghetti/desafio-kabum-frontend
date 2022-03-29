import React from "react";
import { IconCart } from "../../../assets/images/IconCart";
import { IconFavorite } from "../../../assets/images/IconFavorite";
import { IconSac } from "../../../assets/images/IconSac";
import * as S from "./styled";

export default function AdditionalInfo(props: any) {
  const { favoriteCount } = props;
  const { cartCount } = props;
  return (
    <S.Container>
      <S.Sac>
        <S.InternalDiv>
          <IconSac />
        </S.InternalDiv>
      </S.Sac>

      <S.Favorite>
        <S.InternalDiv>
          <IconFavorite />
          {favoriteCount > 0 ? <S.Cont>{favoriteCount}</S.Cont> : ""}
        </S.InternalDiv>
      </S.Favorite>

      <S.Cart>
        <S.InternalDiv>
          <IconCart />
          {cartCount > 0 ? <S.Cont>{cartCount}</S.Cont> : ""}
        </S.InternalDiv>
      </S.Cart>
    </S.Container>
  );
}
