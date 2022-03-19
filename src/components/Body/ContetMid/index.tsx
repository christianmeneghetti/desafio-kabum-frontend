import React from "react";
import * as S from "./styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../Carousel";

export default function ContentMid() {
  return (
    <S.DivOffersBot>
      <S.CarouselOffers>
        <Carousel />
      </S.CarouselOffers>
    </S.DivOffersBot>
  );
}
