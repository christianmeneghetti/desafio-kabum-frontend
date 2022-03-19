import styled from "styled-components";
import { clrKabumWht } from "../../UI/variables";

export const DivOffersBot = styled.div`
  padding: 0px 4rem 0px 4rem;
  width: 100%;
  background-color: ${clrKabumWht};
`;

export const CarouselOffers = styled.div`
  width: 100%;
  position: relative;
  &:after {
    content: "";
    pointer-events: none;
    position: absolute;
    right: 0px;
    top: 0px;
    width: 96px;
    height: 100%;
    background: linear-gradient(
      270deg,
      rgb(250, 250, 251) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export const OffersBot = styled.div`
  position: relative;
  display: block;
`;

export const Offers = styled.div`
  padding: 0px 0.5rem;
`;

export const SlickOffers = styled.div`
  opacity: 1;
  transform: translate3d(-4370px, 0px, 0px);
`;

export const Item = styled.div`
  outline: none;
`;
