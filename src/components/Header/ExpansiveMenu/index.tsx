import React, { useState } from "react";
import { ArrowDown } from "../../../assets/images/IconArrowDown";
import { clrKabumEvnDark } from "../../../UI/variables";
import Departaments from "../Departaments";
import * as S from "./styled";

export default function ExpansiveMenu(props: any) {
  const { departaments } = props;
  const [dropdown, setDropdown] = useState(false);
  const clr = clrKabumEvnDark;

  return (
    <S.ExpansiveMenu>
      <S.Menus>
        <S.Items>
          <S.Departaments
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <S.DepartamentsBtn
              theme={
                dropdown
                  ? "background-color:" + clr
                  : "background-color: transparent"
              }
            >
              <S.DepartamentsSpn>TODOS OS DEPARTAMENTOS</S.DepartamentsSpn>
              <S.ArrowDown
                theme={
                  dropdown
                    ? "transform: rotate(180deg);" +
                      "transition: all 0.4s ease 0s;"
                    : "transform: rotate(0deg);" +
                      "transition: all 0.4s ease 0s;"
                }
              >
                <ArrowDown />
              </S.ArrowDown>
            </S.DepartamentsBtn>
            {dropdown && <Departaments departaments={departaments} />}
          </S.Departaments>
          <S.Item>SEJA PRIME</S.Item>
          <S.Item> CENTRAL DE ATENDIMENTO</S.Item>
        </S.Items>
      </S.Menus>
    </S.ExpansiveMenu>
  );
}
