import styled from "styled-components";
import { clrTitleOffer } from "../../UI/variables";

export const DivTop = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: baseline;
  align-items: baseline;
`;

export const H1Top = styled.h1`
  font-size: 24px;
  line-height: 32px;
  font-weight: 800;
  color: ${clrTitleOffer};
  text-transform: uppercase;
  padding-left: 5px;
`;
