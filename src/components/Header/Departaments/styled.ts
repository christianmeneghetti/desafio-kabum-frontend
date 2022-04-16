import styled from "styled-components";
import {
  clrHoverButton,
  clrKabumGray,
  clrKabumWht,
  clrOfferTxt,
  clrWht,
} from "../../../UI/variables";

export const DropDownMenu = styled.div`
  max-width: 786px;
  display: flex;
  background-color: ${clrWht};
  left: 0px;
  position: absolute;
  top: 35px;
  z-index: 999;
`;

export const InnerDropDownMenu = styled.div`
  overflow: hidden auto;
  box-shadow: rgb(40 41 61 / 4%) 0px 2px 4px, rgb(96 97 112 / 16%) 0px 8px 16px;
`;

export const OuterDepartaments = styled.div`
  display: flex;
  flex-direction: column;
  width: 285px;
  padding: 16px 0px;
`;

export const Departaments = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InnerDepartaments = styled.a`
  background-color: transparent;
  color: ${clrOfferTxt};
  font-size: 16px;
  font-weight: 400;
  padding: 8px 30px;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: ${clrKabumWht};
  }
`;
