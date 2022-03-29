import React from "react";
import Banner from "./Banner";
import ContentBot from "./ContentBot";
import ContentTop from "./ContentTop";
import ContentMid from "./ContetMid";
import * as S from "./styled";

export default function Body(props: any) {
  const { ...offers } = props;
  const { favorite, onAddFavorite, onAddCart } = props;

  return (
    <S.MainBody>
      <S.StyledBody>
        <Banner />
        <S.ArticleContent>
          <S.SectionContent>
            <ContentTop />
            <ContentMid
              offers={offers}
              favorite={favorite}
              onAddFavorite={onAddFavorite}
              onAddCart={onAddCart}
            />
            <ContentBot />
          </S.SectionContent>
        </S.ArticleContent>
      </S.StyledBody>
    </S.MainBody>
  );
}
