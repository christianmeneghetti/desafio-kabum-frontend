import styled from "styled-components";
import { clrKabumGray } from "../../../UI/variables";

export const DivTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const H1Top = styled.h1`
  font-size: 24px;
  line-height: 32px;
  font-weight: 800;
  color: ${clrKabumGray};
  text-transform: uppercase;
  padding-left: 5px;
`;
