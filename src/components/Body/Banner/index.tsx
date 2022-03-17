import React from "react";
import * as S from "./styled";
import { BannerImg } from "../../../assets/images/BannerImg";

export default function Banner() {
  return (
    <>
      <S.BannerLink href="google.com">
        <S.Imagem
          src="/BannerTopo.jpg"
          alt="BannerTopo"
          width="1440"
          height="600"
        />
      </S.BannerLink>
    </>
  );
}
