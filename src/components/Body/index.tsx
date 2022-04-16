import React from "react";
import Banner from "./Banner";
import LowerBanners from "./LowerBanners";
import Campaign from "./Campaign";
import Showcase from "./Showcase";
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
            <Campaign />
            <Showcase
              offers={offers}
              favorite={favorite}
              onAddFavorite={onAddFavorite}
              onAddCart={onAddCart}
            />
            <LowerBanners />
          </S.SectionContent>
        </S.ArticleContent>
      </S.StyledBody>
    </S.MainBody>
  );
}
