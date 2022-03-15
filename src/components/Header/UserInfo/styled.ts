import styled from "styled-components";
import { corTexto } from "../../UI/variables";

export const User = styled.div`
  display: flex;
  flex-direction: row;
  color: ${corTexto};
  width: 10.375rem;
  margin-left: 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-item: flex-start;
  color: ${corTexto};
`;

export const Login = styled.a`
  font-weight: bold;
  color: ${corTexto};
`;

export const Cadastro = styled.a`
  font-weight: bold;
  color: ${corTexto};
`;
