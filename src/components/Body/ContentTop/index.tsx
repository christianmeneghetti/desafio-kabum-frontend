import React from "react";
import { LogoUnion } from "../../../assets/images/LogoUnion";
import * as S from "./styled";

export default function ContentTop() {
  return (
    <S.Offers>
      <S.OffersTop>
        <S.OfferBlack>
          <S.H1Black>BLACK FRIDAY</S.H1Black>
        </S.OfferBlack>
        <S.OfferPromo>
          <S.OfferText>A PROMOÇÃO TERMINA EM:</S.OfferText>
          <S.OfferDisplay>
            <LogoUnion />
            <S.SpanCountdown>13D 18:15:56</S.SpanCountdown>
          </S.OfferDisplay>
        </S.OfferPromo>
      </S.OffersTop>
    </S.Offers>
  );
}
