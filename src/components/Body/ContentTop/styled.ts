import styled from "styled-components";
import { clrKabum, clrText } from "../../UI/variables";

export const Offers = styled.div`
  width: 100%;
`;

export const OffersTop = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 4.375rem;
  padding: 1.125rem 4.5rem;
  background: ${clrKabum};
`;

export const OfferBlack = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const H1Black = styled.h1`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 800;
  text-transform: uppercase;
  color: ${clrText};
`;

export const OfferPromo = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const OfferText = styled.div`
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 700;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: ${clrText};
  margin-right: 0.5rem;
`;

export const OfferDisplay = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const SpanCountdown = styled.span`
  min-width: 154px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1rem;
  color: ${clrText};
  text-transform: uppercase;
`;
