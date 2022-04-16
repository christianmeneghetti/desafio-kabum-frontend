import styled from "styled-components";
import { clrKabumGray, clrKabumWht, clrWht } from "../../../UI/variables";

export const AdressPrincipal = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  white-space: nowrap;
  overflow: hidden;
`;
export const AddressPDiv = styled.div`
  width: auto;
  line-height: 1;
`;

export const AdressIDiv = styled.div`
  background: transparent;
  cursor: pointer;
`;

export const AddressOpt = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  max-height: 10.5rem;
  overflow: auto;
  z-index: 9999;
`;

export const ArrowDown = styled.div`
  display: inline-flex;
  ${(props) => props.theme};
`;

export const Open = styled.div`
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  position: fixed;
  mix-blend-mode: multiply;
  transition: opacity 1s ease 0s;
  opacity: 0.5;
  overflow-y: hidden;
  z-index: -1;
`;

export const Shipping = styled.label`
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  color: ${clrWht};
  margin-right: 4px;
  display: flex;
  flex-basis: 72px;
`;

export const Adress = styled.label`
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: ${clrWht};
  margin-right: 4px;
  cursor: pointer;
  display: inline-block;
  width: auto;
  max-width: calc(100% - 16px);
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
`;

export const OptionialAddress = styled.span`
  height: 34px;
  width: 100%;
  text-overflow: ellipsis;
  vertical-align: middle;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: ${clrKabumGray};
  background: ${clrWht};
  padding: 8px;
  cursor: pointer;
  &:hover {
    background: ${clrKabumWht};
  }
`;
