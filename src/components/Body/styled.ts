import styled from "styled-components";
import { clrBackground, clrKabumWht } from "../../UI/variables";

export const MainBody = styled.main`
  display: flex;
  background-color: ${clrBackground};
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 100vh;
`;

export const StyledBody = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  max-width: 1440px;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

  @media (max-width: 1440px) {
    padding: 0px 1rem;
  }
`;

export const ArticleContent = styled.article`
  margin: 0px 0px 21rem 0px;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  max-width: 1360px;
  background-color: ${clrKabumWht};
  overflow-x: hidden;

  @media (max-width: 1400px) {
    margin: 0px auto;
    width: 100%;
  }
`;

export const SectionContent = styled.section``;
