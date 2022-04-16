import styled from "styled-components";
import { clrKabumError } from "../../../UI/variables";

export const Contents = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: row;
  margin-top: 48px;
`;

export const Sized = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
  padding: 0px 1rem;
`;

export const DivContents = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
  max-width: 63.125rem;
`;

export const Division = styled.div`
  display: flex;
  width: 2px;
  background-color: rgb(242, 243, 244);
  margin: 0px 32px;
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  color: ${clrKabumError};
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 0.875rem;
`;
