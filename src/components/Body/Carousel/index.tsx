/* eslint-disable react/jsx-key */
import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ForwardArrow } from "../../../assets/images/ForwardArrow";
import { BackArrow } from "../../../assets/images/BackArrow";
import * as S from "./styled";
import { IconFavoriteOffer } from "../../../assets/images/IconFavoriteOffer";
import { Rating } from "../../../assets/images/Rating";
import { TruckFill } from "../../../assets/images/TruckFill";
import { OpenBox } from "../../../assets/images/OpenBox";
import { IconCartWht } from "../../../assets/images/IconCartWht";
import axios from "axios";
import { off } from "process";

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

export default function Carousel() {
  const [offers, setOffers] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/offers").then((response) => {
      setOffers(response.data);
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    centerMode: false,
    slidesToScroll: 1,
    initialSlide: 0,
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
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {offers.map((offer, index) => {
          return (
            <S.Offer key={index}>
              <>
                <S.OfferCard>
                  <S.OfferCardTop>
                    <S.OfferContentTop>
                      <S.OfferFavorite>
                        <S.OfferFavoriteButton>
                          <IconFavoriteOffer />
                        </S.OfferFavoriteButton>
                      </S.OfferFavorite>
                      <S.OfferStars>
                        <Rating />
                      </S.OfferStars>
                    </S.OfferContentTop>
                  </S.OfferCardTop>
                  <S.OfferLink href="#">
                    <S.OfferImg src={offer.img} />
                    <S.OfferDivManufactor>
                      <S.OfferManufactor>
                        {offer.manufacturer}
                      </S.OfferManufactor>
                    </S.OfferDivManufactor>
                    <S.OfferInfo>
                      <S.OfferDivTitle>
                        <S.OfferTitle>{offer.title}</S.OfferTitle>
                      </S.OfferDivTitle>
                    </S.OfferInfo>
                    <S.OfferDivPrice>
                      <S.OfferPriceOf>{offer.priceOf}</S.OfferPriceOf>
                      <S.OfferPricePer>{offer.pricePer}</S.OfferPricePer>
                      <S.OfferModality>À VISTA</S.OfferModality>
                    </S.OfferDivPrice>
                    {offer.freeFreight == true || offer.openbox == true ? (
                      <S.OfferExtra>
                        {offer.freeFreight === true ? (
                          <S.OfferDivFreight>
                            <S.OfferTrcuk>
                              <TruckFill />
                            </S.OfferTrcuk>
                            <S.OfferFreight>FRETE GRÁTIS</S.OfferFreight>
                          </S.OfferDivFreight>
                        ) : (
                          ""
                        )}
                        {offer.openbox === true ? (
                          <S.OfferDivOpen>
                            <S.OfferBox>
                              <OpenBox />
                            </S.OfferBox>
                            <S.OfferOpen>OPEN BOX</S.OfferOpen>
                          </S.OfferDivOpen>
                        ) : (
                          ""
                        )}
                      </S.OfferExtra>
                    ) : (
                      ""
                    )}
                  </S.OfferLink>
                  <S.OfferDivBuy>
                    <S.OfferBuy>
                      <S.OfferBuyButton>
                        <IconCartWht />
                        <S.OfferSpanBuy>COMPRAR</S.OfferSpanBuy>
                      </S.OfferBuyButton>
                    </S.OfferBuy>
                  </S.OfferDivBuy>
                </S.OfferCard>
              </>
            </S.Offer>
          );
        })}
      </Slider>
    </>
  );
}
