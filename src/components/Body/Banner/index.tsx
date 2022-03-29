import React from "react";
import * as S from "./styled";
import { BannerImg } from "../../../assets/images/BannerImg";

export default function Banner() {
  return (
    <S.BannerLink href="#" target="_self">
      <S.Imagem
        src="/BannerTop.jpg"
        alt="BannerTop"
        width="1440"
        height="600"
      />
    </S.BannerLink>
  );
}
