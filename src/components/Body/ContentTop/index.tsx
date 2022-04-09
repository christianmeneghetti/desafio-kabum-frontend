import React from "react";
import Countdown from "react-countdown";
import { deflateSync } from "zlib";
import { LogoUnion } from "../../../assets/images/LogoUnion";
import * as S from "./styled";

export default function ContentTop() {
  const renderer = ({ days, hours, minutes, seconds }: any) => {
    return (
      <span>
        {days}D {hours}:{minutes}:{seconds}
      </span>
    );
  };
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
            <S.SpanCountdown>
              <Countdown date={Date.now() + 1000000000} renderer={renderer} />
            </S.SpanCountdown>
          </S.OfferDisplay>
        </S.OfferPromo>
      </S.OffersTop>
    </S.Offers>
  );
}
