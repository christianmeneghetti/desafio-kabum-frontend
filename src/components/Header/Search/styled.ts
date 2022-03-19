import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 35.99px;
  padding: 0.5rem;
  font-size: 14px;
  font-weight: 400;
  border-radius: 1rem 25px 100px 1rem;
  border-color: transparent;
  outline: none;
  &:hoover {
    border-color: transparent;
  }
`;

export const Logo = styled.button`
  background-color: transparent;
  cursor: point;
  border-color: trasnparent;
  z-index: 2;
  margin-left: -38px;
  border: none;
  top: -6px;
  position: absolute;
`;
