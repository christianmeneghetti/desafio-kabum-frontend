import styled from "styled-components";
import {
  clrBannerBorder,
  clrBoxShadow,
  clrOfferTxt,
  clrWht,
} from "../../UI/variables";

export const BannerDiv = styled.div`
  margin-top: 32px;
  margin-bottom: 72px;
  padding: 32px 64px;
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background: ${clrWht};
`;

export const BannerBot = styled.div`
  display: grid;
  max-width: 76rem;
  width: 100%;
  margin: 0px 1.5rem 0px 0px;
  border: 0.663366px solid ${clrBannerBorder};
  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px ${clrBoxShadow};
  }
`;

export const BannerDivText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 1rem 1rem;
`;

export const BannerSpanLg = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${clrOfferTxt};
`;

export const BannerSpanSm = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: ${clrOfferTxt};
`;

export const BannerABot = styled.a`
  display: flex;
  flex-direction: column;
  object-fit: contain;
  margin-bottom: 0px;
  background: rgb(255, 255, 255);
  border: 0.663366px solid rgb(242, 243, 244);
  border-radius: 0.25rem;
  text-decoration: none;
`;

export const BannerImg = styled.img`
  width: 100%;
  object-fit: contain;
  height: auto;
`;
