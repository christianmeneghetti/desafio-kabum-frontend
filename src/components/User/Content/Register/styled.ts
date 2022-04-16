import styled from "styled-components";
import {
  clrKabum,
  clrManufactor,
  clrOfferTxt,
  clrWht,
} from "../../../../UI/variables";

export const Register = styled.section`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
`;

export const FormRegister = styled.form``;

export const DivRegister = styled.div`
  position: relative;
  margin-bottom: 32px;
`;

export const DivCamp = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

export const DivInp = styled.div`
  position: relative;
`;

export const DivForm = styled.div`
  position: relative;
  border-color: ${clrManufactor};
`;

export const DivButton = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

export const DivSvg = styled.div`
  margin-right: 10px;
`;

export const FormH2 = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: ${clrKabum};
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border-style: solid;
  border-width: 0.0625rem;
  border-radius: 0.25rem;
  width: 100%;
  background: none;
  padding: 0.6875rem 1rem;
  color: ${clrOfferTxt};
  font-size: 0.875rem;
  ${(props) => props.theme};
  :focus ~ label,
  :not([value=""]) ~ label {
    top: 0px;
    left: 0.8125rem;
    background-color: ${clrWht};
    padding: 0px 0.125rem;
    font-size: 0.75rem;
    line-height: 1.125rem;
  }
  :focus {
    outline: none;
    border-color: ${clrKabum};
  }
`;

export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  transition: all 300ms ease 0s;
  color: ${clrManufactor};
  font-size: 0.875rem;
  line-height: 1rem;
  ${(props) => props.theme};
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${clrKabum};
  background-color: ${clrWht};
  user-select: none;
  color: ${clrKabum};
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  transition: background-color 0.3s ease 0s;
  border-radius: 0.25rem;
`;
