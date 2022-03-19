import React from "react";
import * as S from "./styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrows from "../Carousel";

export default function ContetBot() {
  return (
    <S.DivOffersBot>
      <S.CarouselOffers>
        <CustomArrows />
      </S.CarouselOffers>
    </S.DivOffersBot>
  );
}
