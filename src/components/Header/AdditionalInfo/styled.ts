import styled from "styled-components";
import { corTexto } from "../../UI/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-item: flex-start;
  color: ${corTexto};
  margin-left: 0px;
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