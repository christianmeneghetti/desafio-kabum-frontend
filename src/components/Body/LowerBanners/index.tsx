import React from "react";
import * as S from "./styled";

export default function LowerBanners() {
  return (
    <S.BannerDiv>
      <S.BannerBot>
        <S.BannerDivText>
          <S.BannerSpanLg>VENDA O SEU PRODUTO</S.BannerSpanLg>
          <S.BannerSpanSm>
            Venda o seu produto usado em nosso marketplace.
          </S.BannerSpanSm>
        </S.BannerDivText>
        <S.BannerABot href="#">
          <S.BannerImg
            src="/BannerBot01.jpg"
            alt="BannerBot01"
            width="384"
            height="168"
          />
        </S.BannerABot>
      </S.BannerBot>

      <S.BannerBot>
        <S.BannerDivText>
          <S.BannerSpanLg>CONHEÇA OS PRODUTOS PRIME</S.BannerSpanLg>
          <S.BannerSpanSm>
            Fique por dentro de todos os nossoa benefícios.
          </S.BannerSpanSm>
        </S.BannerDivText>
        <S.BannerABot href="#">
          <S.BannerImg
            src="/BannerBot02.jpg"
            alt="BannerBot01"
            width="384"
            height="168"
          />
        </S.BannerABot>
      </S.BannerBot>
      <S.BannerBot>
        <S.BannerDivText>
          <S.BannerSpanLg>CONHEÇA NOSSOS PRODUTOS DE LEILÃO</S.BannerSpanLg>
          <S.BannerSpanSm>As melhores oportunidades de compra.</S.BannerSpanSm>
        </S.BannerDivText>
        <S.BannerABot href="#">
          <S.BannerImg
            src="/BannerBot03.jpg"
            alt="BannerBot01"
            width="384"
            height="168"
          />
        </S.BannerABot>
      </S.BannerBot>
    </S.BannerDiv>
  );
}
