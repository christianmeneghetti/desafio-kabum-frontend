import styled from "styled-components";
import { clrKabumWht, clrWht } from "../UI/variables";

export const Main = styled.main`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: ${clrKabumWht};
  min-height: calc(100vh - 250px);
`;

export const StyledIdentification = styled.div`
  display: flex;
  flex: 1 1 0%;
  min-height: 614px;
  padding-bottom: 64px;
  -webkit-box-pack: center;
  justify-content: center;
  background-color: ${clrWht};
`;

export const IdentificationContent = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  max-width: 1216px;
  margin-top: 32px;
  padding: 0px 1rem;
`;
