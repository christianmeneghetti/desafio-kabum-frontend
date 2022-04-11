import React, { useState } from "react";
import { ArrowDown } from "../../../assets/images/ArrowDown";
import DropdownMenu from "../DropdownMenu";
import * as S from "./styled";

export default function ExpansiveMenu() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <S.ExpansiveMenu>
      <S.Menus>
        <S.Items>
          <S.Departaments
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <S.DepartamentsBtn>
              <S.DepartamentsSpn>TODOS OS DEPARTAMENTOS</S.DepartamentsSpn>
              <ArrowDown />
            </S.DepartamentsBtn>
            {dropdown && <DropdownMenu />}
          </S.Departaments>
          <S.Item>SEJA PRIME</S.Item>
          <S.Item> CENTRAL DE ATENDIMENTO</S.Item>
        </S.Items>
      </S.Menus>
    </S.ExpansiveMenu>
  );
}
