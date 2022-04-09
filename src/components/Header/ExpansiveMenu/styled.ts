import styled from "styled-components";
import { clrKabum, clrKabumDark, clrWht } from "../../UI/variables";

export const ExpansiveMenu = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${clrKabum};
`;

export const Menus = styled.div`
  background-color: ${clrKabum};
  width: 100%;
  position: relative;
  z-index: 999;
  display: flex;
  justify-content: center;
`;

export const Departaments = styled.div`
  background-color: ${clrKabumDark};
  width: 285px;
  padding: 0px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  align-items: center;
  &:after {
    content: "";
    background-color: rgb(255, 81, 1);
    position: absolute;
    width: 100vw;
    height: 100%;
    z-index: 1;
  }
`;

export const Items = styled.nav`
  max-width: 1216px;
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: flex-start;
  gap: 4rem;
`;

export const Item = styled.a`
  font-size: 14px;
  font-weight: 700;
  padding: 8px 0px;
  color: ${clrWht};
  margin: 0px 1px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

export const DepartamentsSpn = styled.span`
  margin: 0px 25px 0px 0px;
  font-size: 14px;
  font-weight: 700;
`;

export const DepartamentsBtn = styled.button`
  font-size: 14px;
  text-align: right;
  font-weight: 700;
  color: ${clrWht};
  background-color: transparent;
  position: relative;
  cursor: pointer;
  border: none;
  width: 285px;
  padding: 11px 20px 8px 0px;
  z-index: 2;
`;
