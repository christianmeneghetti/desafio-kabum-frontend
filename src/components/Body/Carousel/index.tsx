import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ForwardArrow } from "../../../assets/images/ForwardArrow";
import { BackArrow } from "../../../assets/images/BackArrow";
import * as S from "./styled";

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <svg
      className={className}
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ForwardArrow />
    </svg>
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <svg
      className={className}
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <BackArrow />
    </svg>
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: (
        <SampleNextArrow
          className={undefined}
          style={undefined}
          onClick={undefined}
        />
      ),
      prevArrow: (
        <SamplePrevArrow
          className={undefined}
          style={undefined}
          onClick={undefined}
        />
      ),
    };
    return (
      <>
        <Slider {...settings}>
          <S.Offer>
            <div>
              <S.OfferCard>
                <S.OfferCardTop></S.OfferCardTop>
                <S.OfferLink>
                  <S.OfferImg src="Offer01.jpg" />
                </S.OfferLink>
              </S.OfferCard>
            </div>
          </S.Offer>

          <S.Offer>
            <div>
              <S.OfferCard>
                <S.OfferCardTop></S.OfferCardTop>
                <S.OfferLink>
                  <S.OfferImg src="Offer02.jpg" />
                </S.OfferLink>
              </S.OfferCard>
            </div>
          </S.Offer>

          <S.Offer>
            <div>
              <S.OfferCard>
                <S.OfferCardTop></S.OfferCardTop>
                <S.OfferLink>
                  <S.OfferImg src="Offer03.jpg" />
                </S.OfferLink>
              </S.OfferCard>
            </div>
          </S.Offer>

          <S.Offer>
            <div>
              <S.OfferCard>
                <S.OfferCardTop></S.OfferCardTop>
                <S.OfferLink>
                  <S.OfferImg src="Offer04.jpg" />
                </S.OfferLink>
              </S.OfferCard>
            </div>
          </S.Offer>

          <S.Offer>
            <div>
              <S.OfferCard>
                <S.OfferCardTop></S.OfferCardTop>
                <S.OfferLink>
                  <S.OfferImg src="Offer05.jpg" />
                </S.OfferLink>
              </S.OfferCard>
            </div>
          </S.Offer>

          <S.Offer>
            <div>
              <S.OfferCard>
                <S.OfferCardTop></S.OfferCardTop>
                <S.OfferLink>
                  <S.OfferImg src="Offer01.jpg" />
                </S.OfferLink>
              </S.OfferCard>
            </div>
          </S.Offer>
        </Slider>
      </>
    );
  }
}
