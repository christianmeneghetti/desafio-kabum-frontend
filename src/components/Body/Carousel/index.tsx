import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ForwardArrow } from "../../../assets/images/ForwardArrow";
import { BackArrow } from "../../../assets/images/BackArrow";
import * as S from "./styled";
import { IconColor } from "../../../assets/images/IconColor";
import { Rating } from "../../../assets/images/Rating";
import { TruckFill } from "../../../assets/images/TruckFill";
import { OpenBox } from "../../../assets/images/OpenBox";
import { IconCartWht } from "../../../assets/images/IconCartWht";

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
                <S.OfferCardTop>
                  <S.OfferContentTop>
                    <S.OfferFavorite>
                      <S.OfferFavoriteButton>
                        <IconColor />
                      </S.OfferFavoriteButton>
                    </S.OfferFavorite>
                    <S.OfferStars>
                      <Rating />
                    </S.OfferStars>
                  </S.OfferContentTop>
                </S.OfferCardTop>
                <S.OfferLink href="#">
                  <S.OfferImg src="Offer01.jpg" />
                  <S.OfferDivManufactor>
                    <S.OfferManufactor>FABRICANTE</S.OfferManufactor>
                  </S.OfferDivManufactor>
                  <S.OfferInfo>
                    <S.OfferDivTitle>
                      <S.OfferTitle>
                        Placa-mãe Gigabyte Aorus B450 Aorus M, AMD AM4, mATX,
                        DDR4
                      </S.OfferTitle>
                    </S.OfferDivTitle>
                  </S.OfferInfo>
                  <S.OfferDivPrice>
                    <S.OfferPriceFrom>R$ 380,99</S.OfferPriceFrom>
                    <S.OfferPriceBy>R$ 280,90</S.OfferPriceBy>
                    <S.OfferModality>À VISTA</S.OfferModality>
                  </S.OfferDivPrice>
                  <S.OfferExtra>
                    <S.OfferDivFreight>
                      <S.OfferTrcuk>
                        <TruckFill />
                      </S.OfferTrcuk>
                      <S.OfferFreight>FRETE GRÁTIS</S.OfferFreight>
                    </S.OfferDivFreight>
                    <S.OfferDivOpen>
                      <S.OfferBox>
                        <OpenBox />
                      </S.OfferBox>
                      <S.OfferOpen>OPEN BOX</S.OfferOpen>
                    </S.OfferDivOpen>
                  </S.OfferExtra>
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
            </div>
          </S.Offer>

          <S.Offer>
            <div>
              <S.OfferCard>
                <S.OfferCardTop>
                  <S.OfferContentTop>
                    <S.OfferFavorite>
                      <S.OfferFavoriteButton>
                        <IconColor />
                      </S.OfferFavoriteButton>
                    </S.OfferFavorite>
                    <S.OfferStars>
                      <Rating />
                    </S.OfferStars>
                  </S.OfferContentTop>
                </S.OfferCardTop>
                <S.OfferLink href="#">
                  <S.OfferImg src="Offer02.jpg" />
                  <S.OfferDivManufactor>
                    <S.OfferManufactor>FABRICANTE</S.OfferManufactor>
                  </S.OfferDivManufactor>
                  <S.OfferInfo>
                    <S.OfferDivTitle>
                      <S.OfferTitle>
                        Processador AMD Ryzen 7 3800X Cache 32MB 3.9GHz 4.5GHz
                        Max
                      </S.OfferTitle>
                    </S.OfferDivTitle>
                  </S.OfferInfo>
                  <S.OfferDivPrice>
                    <S.OfferPriceFrom>R$ 380,99</S.OfferPriceFrom>
                    <S.OfferPriceBy>R$ 280,90</S.OfferPriceBy>
                    <S.OfferModality>À VISTA</S.OfferModality>
                  </S.OfferDivPrice>
                  <S.OfferExtra>
                    <S.OfferDivFreight>
                      <S.OfferTrcuk>
                        <TruckFill />
                      </S.OfferTrcuk>
                      <S.OfferFreight>FRETE GRÁTIS</S.OfferFreight>
                    </S.OfferDivFreight>
                    <S.OfferDivOpen>
                      <S.OfferBox>
                        <OpenBox />
                      </S.OfferBox>
                      <S.OfferOpen>OPEN BOX</S.OfferOpen>
                    </S.OfferDivOpen>
                  </S.OfferExtra>
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
            </div>
          </S.Offer>

          <S.Offer>
            <div>
              <S.OfferCard>
                <S.OfferCardTop>
                  <S.OfferContentTop>
                    <S.OfferFavorite>
                      <S.OfferFavoriteButton>
                        <IconColor />
                      </S.OfferFavoriteButton>
                    </S.OfferFavorite>
                    <S.OfferStars>
                      <Rating />
                    </S.OfferStars>
                  </S.OfferContentTop>
                </S.OfferCardTop>
                <S.OfferLink href="#">
                  <S.OfferImg src="Offer03.jpg" />
                  <S.OfferDivManufactor>
                    <S.OfferManufactor>FABRICANTE</S.OfferManufactor>
                  </S.OfferDivManufactor>
                  <S.OfferInfo>
                    <S.OfferDivTitle>
                      <S.OfferTitle>
                        Memória HyperX Fury, 8GB, 2400MHz, DDR4, CL15, Preto...
                      </S.OfferTitle>
                    </S.OfferDivTitle>
                  </S.OfferInfo>
                  <S.OfferDivPrice>
                    <S.OfferPriceFrom>R$ 380,99</S.OfferPriceFrom>
                    <S.OfferPriceBy>R$ 280,90</S.OfferPriceBy>
                    <S.OfferModality>À VISTA</S.OfferModality>
                  </S.OfferDivPrice>
                  <S.OfferExtra>
                    <S.OfferDivFreight>
                      <S.OfferTrcuk>
                        <TruckFill />
                      </S.OfferTrcuk>
                      <S.OfferFreight>FRETE GRÁTIS</S.OfferFreight>
                    </S.OfferDivFreight>
                    <S.OfferDivOpen>
                      <S.OfferBox>
                        <OpenBox />
                      </S.OfferBox>
                      <S.OfferOpen>OPEN BOX</S.OfferOpen>
                    </S.OfferDivOpen>
                  </S.OfferExtra>
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
            </div>
          </S.Offer>

          <S.Offer>
            <div>
              <S.OfferCard>
                <S.OfferCardTop>
                  <S.OfferContentTop>
                    <S.OfferFavorite>
                      <S.OfferFavoriteButton>
                        <IconColor />
                      </S.OfferFavoriteButton>
                    </S.OfferFavorite>
                    <S.OfferStars>
                      <Rating />
                    </S.OfferStars>
                  </S.OfferContentTop>
                </S.OfferCardTop>
                <S.OfferLink href="#">
                  <S.OfferImg src="Offer04.jpg" />
                  <S.OfferDivManufactor>
                    <S.OfferManufactor>FABRICANTE</S.OfferManufactor>
                  </S.OfferDivManufactor>
                  <S.OfferInfo>
                    <S.OfferDivTitle>
                      <S.OfferTitle>
                        Headset Gamer HyperX Cloud Stinger - HX-HSCS-BK/NA
                      </S.OfferTitle>
                    </S.OfferDivTitle>
                  </S.OfferInfo>
                  <S.OfferDivPrice>
                    <S.OfferPriceFrom>R$ 380,99</S.OfferPriceFrom>
                    <S.OfferPriceBy>R$ 280,90</S.OfferPriceBy>
                    <S.OfferModality>À VISTA</S.OfferModality>
                  </S.OfferDivPrice>
                  <S.OfferExtra>
                    <S.OfferDivFreight>
                      <S.OfferTrcuk>
                        <TruckFill />
                      </S.OfferTrcuk>
                      <S.OfferFreight>FRETE GRÁTIS</S.OfferFreight>
                    </S.OfferDivFreight>
                    <S.OfferDivOpen>
                      <S.OfferBox>
                        <OpenBox />
                      </S.OfferBox>
                      <S.OfferOpen>OPEN BOX</S.OfferOpen>
                    </S.OfferDivOpen>
                  </S.OfferExtra>
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
            </div>
          </S.Offer>

          <S.Offer>
            <div>
              <S.OfferCard>
                <S.OfferCardTop>
                  <S.OfferContentTop>
                    <S.OfferFavorite>
                      <S.OfferFavoriteButton>
                        <IconColor />
                      </S.OfferFavoriteButton>
                    </S.OfferFavorite>
                    <S.OfferStars>
                      <Rating />
                    </S.OfferStars>
                  </S.OfferContentTop>
                </S.OfferCardTop>
                <S.OfferLink href="#">
                  <S.OfferImg src="Offer05.jpg" />
                  <S.OfferDivManufactor>
                    <S.OfferManufactor>FABRICANTE</S.OfferManufactor>
                  </S.OfferDivManufactor>
                  <S.OfferInfo>
                    <S.OfferDivTitle>
                      <S.OfferTitle>
                        Amazon Smart Home Echo Dot Alexa, 3ª Geração, Preto
                      </S.OfferTitle>
                    </S.OfferDivTitle>
                  </S.OfferInfo>
                  <S.OfferDivPrice>
                    <S.OfferPriceFrom>R$ 380,99</S.OfferPriceFrom>
                    <S.OfferPriceBy>R$ 280,90</S.OfferPriceBy>
                    <S.OfferModality>À VISTA</S.OfferModality>
                  </S.OfferDivPrice>
                  <S.OfferExtra>
                    <S.OfferDivFreight>
                      <S.OfferTrcuk>
                        <TruckFill />
                      </S.OfferTrcuk>
                      <S.OfferFreight>FRETE GRÁTIS</S.OfferFreight>
                    </S.OfferDivFreight>
                    <S.OfferDivOpen>
                      <S.OfferBox>
                        <OpenBox />
                      </S.OfferBox>
                      <S.OfferOpen>OPEN BOX</S.OfferOpen>
                    </S.OfferDivOpen>
                  </S.OfferExtra>
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
            </div>
          </S.Offer>

          <S.Offer>
            <div>
              <S.OfferCard>
                <S.OfferCardTop>
                  <S.OfferContentTop>
                    <S.OfferFavorite>
                      <S.OfferFavoriteButton>
                        <IconColor />
                      </S.OfferFavoriteButton>
                    </S.OfferFavorite>
                    <S.OfferStars>
                      <Rating />
                    </S.OfferStars>
                  </S.OfferContentTop>
                </S.OfferCardTop>
                <S.OfferLink href="#">
                  <S.OfferImg src="Offer01.jpg" />
                  <S.OfferDivManufactor>
                    <S.OfferManufactor>FABRICANTE</S.OfferManufactor>
                  </S.OfferDivManufactor>
                  <S.OfferInfo>
                    <S.OfferDivTitle>
                      <S.OfferTitle>
                        Placa-mãe Gigabyte Aorus B450 Aorus M, AMD AM4, mATX,
                        DDR4
                      </S.OfferTitle>
                    </S.OfferDivTitle>
                  </S.OfferInfo>
                  <S.OfferDivPrice>
                    <S.OfferPriceFrom>R$ 380,99</S.OfferPriceFrom>
                    <S.OfferPriceBy>R$ 280,90</S.OfferPriceBy>
                    <S.OfferModality>À VISTA</S.OfferModality>
                  </S.OfferDivPrice>
                  <S.OfferExtra>
                    <S.OfferDivFreight>
                      <S.OfferTrcuk>
                        <TruckFill />
                      </S.OfferTrcuk>
                      <S.OfferFreight>FRETE GRÁTIS</S.OfferFreight>
                    </S.OfferDivFreight>
                    <S.OfferDivOpen>
                      <S.OfferBox>
                        <OpenBox />
                      </S.OfferBox>
                      <S.OfferOpen>OPEN BOX</S.OfferOpen>
                    </S.OfferDivOpen>
                  </S.OfferExtra>
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
            </div>
          </S.Offer>
        </Slider>
      </>
    );
  }
}
