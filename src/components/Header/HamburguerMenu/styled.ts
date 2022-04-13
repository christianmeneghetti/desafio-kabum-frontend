import styled from "styled-components";
import {
  clrBLK,
  clrKabum,
  clrKabumBlk,
  clrManufactor,
  clrWht,
} from "../../UI/variables";

export const HamburguerMenu = styled.nav`
  cursor: pointer;
`;

export const Hamburguer = styled.aside`
  display: flex;
  flex-direction: column;
  max-width: 24rem;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: ${clrKabumBlk};
  z-index: 1000;
`;

export const Greeting = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0rem 1rem 0rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 1rem;
  overflow-y: auto;
`;

export const Out = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
  padding: 2rem 1.5rem;
`;

export const Open = styled.div`
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  position: fixed;
  background-color: ${clrBLK};
  mix-blend-mode: multiply;
  transition: opacity 1s ease 0s;
  opacity: 0.5;
  overflow-y: hidden;
  z-index: 1000;
`;

export const Close = styled.button`
  border: none;
  cursor: pointer;
  position: absolute;
  right: -2rem;
  background-color: transparent;
  width: 1.25rem;
  height: 1.25rem;
`;

export const OutButton = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${clrKabum};
  background-color: ${clrKabum};
  user-select: none;
  color: ${clrWht};
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  transition: background-color 0.3s ease 0s;
  border-radius: 0.25rem;
`;

export const Items = styled.ul`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${clrManufactor};
  padding: 1rem 0px;
  margin: 0rem 2rem 0rem 1rem;
  &:first-child {
    border: none;
    padding-top: 0px;
  }
`;

export const Item = styled.li`
  padding: 1rem 0px;
  display: flex;
  align-items: center;
`;

export const ItemLink = styled.a`
  margin-left: 1rem;
  font-size: 0.875rem;
  line-height: 0.875rem;
  font-weight: 400;
  color: ${clrWht};
  font-size: 16px;
  text-decoration: none;
`;

export const Hello = styled.h4`
  font-size: 1.25rem;
  line-height: 1.875rem;
  font-weight: 700;
  color: ${clrWht};
  margin-left: 1rem;
`;
