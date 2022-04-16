import styled from "styled-components";
import { clrKabumRed, clrKabumWht, clrWht } from "../../../UI/variables";

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${clrWht};
  margin-left: 0px;
`;

export const InternalDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Cont = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  right: 5px;
  transform: translate(70%, -70%);
  transform-origin: 100% 0%;
  height: 20px;
  min-width: 20px;
  border-radius: 10px;
  padding: 0px 6px;
  background: ${clrKabumRed};
  color: ${clrKabumWht};
  font-size: 0.75rem;
  font-weight: bold;
`;

export const Sac = styled.a`
  margin-left: 0px;
`;

export const Favorite = styled.a`
  margin-left: 25px;
`;

export const Cart = styled.a`
  margin-left: 25px;
`;
