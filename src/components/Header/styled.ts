import styled from "styled-components";
import { clrPrimary } from "../UI/variables";

export const Main = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

export const Header = styled.div`
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
  gap: 2rem;
  height: 112px;
  align-items: center;
  @media (max-width: 1280px) {
    gap: 0rem;
  }
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
  ${(props) => props.theme};
  @media (max-width: 1280px) {
    width: 40vw;
  }
`;
