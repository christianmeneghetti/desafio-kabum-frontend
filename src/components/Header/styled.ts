import styled from "styled-components";
import { corPrimaria } from "../UI/variables";

export const Main = styled.div`
  position: relative;
  width: 100%;
  padding: 0 1.5rem;
  background-color: ${corPrimaria};
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

export const SearchDiv = styled.div`
  position: relative;
  width: 100%;
  padding: 0 1.5rem;
  background-color: ${corPrimaria};
  margin-right: 24px;
`;
