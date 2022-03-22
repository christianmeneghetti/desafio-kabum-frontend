import React from "react";
import Content from "./Content";
import * as S from "./styled";
import Top from "./Top";

export default function Identification() {
  return (
    <S.Main>
      <S.StyledIdentification>
        <S.IdentificationContent>
          <Top />
          <Content />
        </S.IdentificationContent>
      </S.StyledIdentification>
    </S.Main>
  );
}
