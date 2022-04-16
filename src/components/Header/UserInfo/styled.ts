import styled from "styled-components";
import { clrInfo, clrWht } from "../../../UI/variables";

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${clrWht};
  max-width: 10.375rem;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  color: ${clrWht};
  width: 10.375rem;
  margin-left: 8px;
`;

export const Welcome = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
`;

export const AccountOut = styled.div`
  display: inline;
  align-items: center;
  font-size: 12px;
`;

export const Span = styled.span`
  font-size: 14px;
  color: ${clrInfo};
`;

export const SpanPipe = styled.span`
  padding: 0px;
  color: ${clrWht};
  margin: 0px 2px;
  font-size: 10px;
  vertical-align: top;
`;

export const Login = styled.a`
  font-weight: bold;
  color: ${clrWht};
`;

export const Register = styled.a`
  font-weight: bold;
  color: ${clrWht};
`;

export const Account = styled.a`
  color: ${clrInfo};
  text-decoration: none;
  cursor: pointer;
`;

export const Out = styled.button`
  font-size: 12px;
  padding: 0px;
  color: ${clrInfo};
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
`;
