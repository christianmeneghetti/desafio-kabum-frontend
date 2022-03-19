import React from "react";
import Banner from "./Banner";
import ContentTop from "./ContentTop";
import ContetBot from "./ContetBot";
import * as S from "./styled";

export default function Body() {
  return (
    <S.MainBody>
      <S.StyledBody>
        <Banner />
        <S.SectionContent>
          <S.StyledContent>
            <ContentTop />
            <ContetBot />
          </S.StyledContent>
        </S.SectionContent>
      </S.StyledBody>
    </S.MainBody>
  );
}
