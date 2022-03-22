import styled from "styled-components";
import { clrPrimary } from "../UI/variables";

export const Main = styled.header`
  position: relative;
  width: 100%;
  padding: 0 1.5rem;
  background-color: ${clrPrimary};
`;

export const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 76rem;
  margin: 0px auto;
  gap: 1rem;
  height: 112px;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
`;

export const ALogo = styled.a`
  height: 3.375rem;
  cursor: pointer;
`;

export const SearchDiv = styled.div`
  position: relative;
  width: 100%;
  padding: 0 1.5rem;
  background-color: ${clrPrimary};
  margin-right: 24px;
`;
