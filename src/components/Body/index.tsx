import React from "react";
import Banner from "./Banner";
import ContentBot from "./ContentBot";
import ContentTop from "./ContentTop";
import ContentMid from "./ContetMid";
import * as S from "./styled";

export default function Body() {
  return (
    <S.MainBody>
      <S.StyledBody>
        <Banner />
        <S.ArticleContent>
          <S.SectionContent>
            <ContentTop />
            <ContentMid />
            <ContentBot />
          </S.SectionContent>
        </S.ArticleContent>
      </S.StyledBody>
    </S.MainBody>
  );
}
