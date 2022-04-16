import React from "react";
import * as S from "./styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../Carousel";

export default function Showcase(props: any) {
  const { offers } = props;
  const { favorite, onAddFavorite, onAddCart } = props;

  return (
    <S.DivOffersBot>
      <S.CarouselOffers>
        <Carousel
          offers={offers}
          favorite={favorite}
          onAddFavorite={onAddFavorite}
          onAddCart={onAddCart}
        />
      </S.CarouselOffers>
    </S.DivOffersBot>
  );
}
