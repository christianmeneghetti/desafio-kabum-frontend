import styled from "styled-components";
import {
  clrWht,
  clrKabum,
  clrManufactor,
  clrOfferTxt,
  clrKabumGray,
  clrBoxShadow,
  clrHoverButton,
} from "../../UI/variables";

export const Offer = styled.div`
  margin: 2rem 11.8rem 1rem;
  display: flex !important;
  width: 214px !important;
  outline: none;
`;

export const OfferCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 25rem;
  background: ${clrWht};
  border-radius: 0.25rem;
  transition: box-shadow 200ms ease 0s;
  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px ${clrBoxShadow};
  }
`;

export const OfferCardTop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0px 0.75rem;
  height: 2rem;
`;

export const OfferLink = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0px 1.5rem 0px;
  text-decoration: none;
  width: 100%;
  overflow: hidden;
`;

export const OfferImg = styled.img`
  height: 6.25rem;
  width: auto;
  object-fit: contain;
`;

export const OfferContentTop = styled.div`
  display: flex;
  width: 100%;
`;

export const OfferFavorite = styled.div`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
`;

export const OfferFavoriteButton = styled.button`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  cursor: pointer;
  border: transparent;
`;

export const OfferStars = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  margin-left: auto;
`;

export const OfferDivManufactor = styled.div`
  padding: 0px 1rem;
`;

export const OfferManufactor = styled.h2`
  font-size: 12px;
  font-weight: 400;
  color: ${clrManufactor};
`;

export const OfferInfo = styled.div`
  padding: 0px 1rem;
`;

export const OfferDivTitle = styled.div`
  width: 100%;
`;

export const OfferTitle = styled.h2`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: bold;
  margin-top: 0.5rem;
  overflow: hidden;
  display: -webkit-box;
  height: 3.375rem;
  color: ${clrKabumGray};
`;

export const OfferDivPrice = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem 1rem;
`;

export const OfferPriceOf = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  height: 1rem;
  color: ${clrOfferTxt};
  text-decoration: line-through;
`;

export const OfferPricePer = styled.span`
  font-size: 1.5rem;
  line-height: 2.125rem;
  font-weight: 700;
  color: ${clrKabum};
`;

export const OfferModality = styled.span`
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-weight: 400;
  height: 1.125rem;
  color: ${clrOfferTxt};
`;

export const OfferExtra = styled.div`
  display: flex;
  width: 100%;
  padding: 0rem 1rem 1rem 1rem;
  align-items: center;
`;

export const OfferDivFreight = styled.div`
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const OfferTrcuk = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const OfferFreight = styled.span`
  font-size: 0.6rem;
  line-height: 1.125rem;
  font-weight: 400;
  height: 1.125rem;
  color: ${clrOfferTxt};
  margin-left: 0.25rem;
`;

export const OfferDivOpen = styled.div`
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  align-items: center;
`;

export const OfferBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const OfferOpen = styled.span`
  font-size: 0.6rem;
  line-height: 1.125rem;
  font-weight: 400;
  height: 1.125rem;
  color: ${clrOfferTxt};
  margin-left: 0.25rem;
`;

export const OfferDivBuy = styled.div`
  flex-shrink: 0;
  height: 2.25rem;
  margin-top: auto;
  width: 100%;
`;

export const OfferBuy = styled.div`
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  width: 100%;
`;

export const OfferBuyButton = styled.button`
  border-radius: 0.25rem;
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${clrWht};
  cursor: pointer;
  background: ${clrKabum};
  border: none;
  &:hover {
    background: linear-gradient(${clrKabum} 0%, ${clrHoverButton} 100%);
  }
`;

export const OfferSpanBuy = styled.span`
  margin-left: 0.5rem;
`;
