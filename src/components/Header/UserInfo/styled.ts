import styled from "styled-components";
import { clrText } from "../../UI/variables";

export const User = styled.div`
  display: flex;
  flex-direction: row;
  color: ${clrText};
  width: 10.375rem;
  margin-left: 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-item: flex-start;
  color: ${clrText};
`;

export const Login = styled.a`
  font-weight: bold;
  color: ${clrText};
`;

export const Cadastro = styled.a`
  font-weight: bold;
  color: ${clrText};
`;
