import React from "react";
import Content from "./Content";
import * as S from "./styled";
import Identification from "./Identification";

export default function User() {
  return (
    <S.Main>
      <S.StyledUser>
        <S.UserContent>
          <Identification />
          <Content />
        </S.UserContent>
      </S.StyledUser>
    </S.Main>
  );
}
