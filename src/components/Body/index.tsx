import React from "react";
import Banner from "./Banner";
import * as S from "./styled";

export default function Body() {
  return (
    <S.SyledBody>
      <S.Main>
        <Banner />
      </S.Main>
    </S.SyledBody>
  );
}
