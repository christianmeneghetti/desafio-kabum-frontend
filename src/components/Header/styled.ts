import styled from "styled-components";
import { corPrimaria } from "../UI/variables";

export const StyledHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-evenly;
  padding: 0 15vw;
  height: 112px;
  align-items: center;
`;

export const Logo = styled.img`
  height: 54px;
  width: 158px;
`;
